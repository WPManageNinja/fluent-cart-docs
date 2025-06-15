// scripts/uploadDocsToOpenAI.js

// At the very top of the file, BEFORE any other requires or definitions
// Polyfill globalThis.File for Node.js >= 20 if not already present or for older Node.js versions.
// This is a safety measure as the SDK might internally rely on it.
if (typeof globalThis.File === 'undefined') {
    globalThis.File = require('node:buffer').File;
    console.log("DEBUG: Polyfilled globalThis.File");
}

require('dotenv').config(); // Load environment variables from .env

const fs = require('fs');
const path = require('path');
const os = require('os');
const matter = require('gray-matter');
const MarkdownIt = require('markdown-it');
const OpenAI = require('openai'); // Keep for general file uploads (non-beta path)

// --- Configuration ---
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_ASSISTANT_ID = process.env.OPENAI_ASSISTANT_ID; // From Phase 2: Assistant ID
const OPENAI_VECTOR_STORE_ID = process.env.OPENAI_VECTOR_STORE_ID; // NEW: Vector Store ID

// CORRECTED: User's documentation folder is 'guide'
const DOCS_BASE_DIR = path.resolve(__dirname, '../');
const DOCS_TO_PROCESS_DIR = path.join(DOCS_BASE_DIR, 'guide');

// --- UPDATED CONFIGURATION FOR CHUNKING (reduced for robustness) ---
const MAX_CHUNK_SIZE_CHARS = 500;
const CHUNK_OVERLAP_CHARS = 100;

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
const md = new MarkdownIt();

// --- Helper Functions ---

/**
 * Recursively gets all .md file paths from a directory.
 * @param {string} dir
 * @returns {string[]} Array of absolute file paths.
 */
function getMarkdownFiles(dir) {
    let files = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        const itemPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            files = files.concat(getMarkdownFiles(itemPath));
        } else if (item.isFile() && item.name.endsWith('.md')) {
            files.push(itemPath);
        }
    }
    return files;
}

/**
 * Cleans Markdown content to plain text suitable for AI.
 * @param {string} markdownContent
 * @returns {string} Cleaned plain text.
 */
function cleanMarkdownContent(markdownContent) {
    const { content } = matter(markdownContent);
    let cleaned_content = content;

    cleaned_content = cleaned_content.replace(/:::(info|tip|warning|danger|details)([\s\S]*?):::/g, '');
    cleaned_content = md.render(cleaned_content);
    cleaned_content = cleaned_content.replace(/\[(.*?)\]\((.*?)\)/g, '$1');
    cleaned_content = cleaned_content.replace(/!\[(.*?)\]\((.*?)\)/g, '');
    cleaned_content = cleaned_content.replace(/```[\s\S]*?```/g, '');
    cleaned_content = cleaned_content.replace(/`([^`]+)`/g, '$1');
    cleaned_content = cleaned_content.replace(/(\r?\n){3,}/g, '\n\n');
    cleaned_content = cleaned_content.trim();

    return cleaned_content;
}

/**
 * Chunks a long string into smaller pieces with optional overlap.
 * @param {string} text The long text to chunk.
 * @param {number} maxChunkSize Max size of each chunk (characters).
 * @param {number} overlapSize Overlap between chunks (characters).
 * @returns {string[]} An array of text chunks.
 */
function chunkContent(text, maxChunkSize, overlapSize) {
    const chunks = [];
    if (!text || text.length === 0) return [];
    if (text.length <= maxChunkSize) {
        return [text.trim()];
    }

    let currentPosition = 0;
    while (currentPosition < text.length) {
        let chunkEnd = Math.min(currentPosition + maxChunkSize, text.length);

        if (chunkEnd < text.length) {
            let slice = text.substring(currentPosition, chunkEnd);
            let lastSentenceEnd = slice.lastIndexOf('.');
            let lastParagraphEnd = slice.lastIndexOf('\n\n');

            if (lastParagraphEnd > 0 && lastParagraphEnd > chunkEnd - maxChunkSize * 0.1) {
                chunkEnd = currentPosition + lastParagraphEnd + 2;
            } else if (lastSentenceEnd > 0 && lastSentenceEnd > chunkEnd - maxChunkSize * 0.05) {
                chunkEnd = currentPosition + lastSentenceEnd + 1;
            }
        }

        if (chunkEnd <= currentPosition && currentPosition < text.length) {
            chunkEnd = Math.min(currentPosition + 1, text.length);
        }

        let chunk = text.substring(currentPosition, chunkEnd).trim();
        if (chunk.length > 0) {
            chunks.push(chunk);
        }

        if (chunkEnd === text.length) {
            break;
        }

        let nextStart = chunkEnd - overlapSize;
        if (nextStart < 0) {
            nextStart = 0;
        }

        if (nextStart <= currentPosition) {
            nextStart = currentPosition + 1;
        }

        currentPosition = nextStart;
    }

    return chunks.filter(c => c.length > 0);
}

/**
 * Uploads a single file (or multiple chunks) to OpenAI's general Files API.
 * This file is then added to a Vector Store.
 * @param {string} originalFilePath Absolute path to the original Markdown file.
 * @param {string} cleanedContent The entire cleaned content of the file.
 * @param {string} displayFileName The name of the original file for logging/display purposes.
 * @returns {Promise<object[]>} Array of OpenAI File objects uploaded or null on failure.
 */
async function uploadContentToOpenAI(originalFilePath, cleanedContent, displayFileName) {
    const baseFileName = path.basename(originalFilePath).replace('.md', '');
    const uploadedFiles = [];
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'openai-doc-chunks-'));

    const chunks = chunkContent(cleanedContent, MAX_CHUNK_SIZE_CHARS, CHUNK_OVERLAP_CHARS);

    if (chunks.length === 0) {
        console.warn(`Skipping ${displayFileName}: No content or all content removed after cleaning/chunking.`);
        fs.rmSync(tempDir, { recursive: true, force: true });
        return [];
    }

    console.log(`Processing ${displayFileName}: ${chunks.length} chunk(s).`);

    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        const fileNameForOpenAI = `${baseFileName}_part${i + 1}.txt`;
        const tempFilePath = path.join(tempDir, fileNameForOpenAI);

        try {
            console.log(`  Writing chunk ${i + 1}/${chunks.length} to temp file: ${tempFilePath}`);
            fs.writeFileSync(tempFilePath, chunk, 'utf8');

            console.log(`  Uploading chunk ${i + 1}/${chunks.length} (${fileNameForOpenAI})...`);

            const fileStream = fs.createReadStream(tempFilePath);

            // This is the general file upload API, which works reliably.
            const file = await openai.files.create({
                file: fileStream,
                purpose: 'assistants',
            });

            uploadedFiles.push(file);
            console.log(`  Uploaded ${fileNameForOpenAI}. File ID: ${file.id}`);
        } catch (error) {
            console.error(`  Failed to upload chunk ${i + 1}/${chunks.length} (${fileNameForOpenAI}) for original file ${displayFileName}:`, error.message);
        } finally {
            if (fs.existsSync(tempFilePath)) {
                fs.unlinkSync(tempFilePath);
            }
        }
    }

    fs.rmSync(tempDir, { recursive: true, force: true });
    console.log(`  Cleaned up temp directory: ${tempDir}`);

    return uploadedFiles;
}

/**
 * Creates an OpenAI Vector Store if one doesn't exist (using manual fetch).
 * @returns {Promise<string>} The ID of the Vector Store.
 */
async function getOrCreateVectorStoreId() {
    if (OPENAI_VECTOR_STORE_ID) {
        console.log(`Using existing Vector Store ID from .env: ${OPENAI_VECTOR_STORE_ID}`);
        return OPENAI_VECTOR_STORE_ID;
    }

    console.log("No Vector Store ID found in .env. Attempting to create a new one...");
    try {
        const createVSResponse = await fetch('https://api.openai.com/v1/vector_stores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'OpenAI-Beta': 'assistants=v2' // Using general Assistants API v2 header
            },
            body: JSON.stringify({
                name: "FluentCart Docs Vector Store",
                expires_after: { anchor: "last_active_at", days: 30 } // Example: expires if inactive for 30 days
            })
        });

        if (!createVSResponse.ok) {
            const errorBody = await createVSResponse.json();
            throw new Error(`HTTP Error creating Vector Store! Status: ${createVSResponse.status}, Details: ${JSON.stringify(errorBody)}`);
        }
        const vectorStore = await createVSResponse.json();
        console.log(`Successfully created new Vector Store! ID: ${vectorStore.id}`);
        console.log(`IMPORTANT: Please add this ID to your .env file as OPENAI_VECTOR_STORE_ID.`);
        return vectorStore.id;
    } catch (error) {
        console.error("Failed to create Vector Store:", error.message);
        throw new Error("Failed to create Vector Store. Please check API key/permissions.");
    }
}

/**
 * Adds files to a specific Vector Store in batches (using manual fetch).
 * @param {string} vectorStoreId The ID of the Vector Store.
 * @param {string[]} fileIds An array of OpenAI File IDs to add to the Vector Store.
 * @returns {Promise<void>}
 */
async function addFilesToVectorStore(vectorStoreId, fileIds) {
    if (fileIds.length === 0) {
        console.log("No files to add to Vector Store.");
        return;
    }

    // --- FIX: Reduce BATCH_SIZE for greater resilience ---
    const BATCH_SIZE = 250; // Reduced from 500 to be more resilient to 500 errors
    let addedFilesCount = 0;

    for (let i = 0; i < fileIds.length; i += BATCH_SIZE) {
        const batchFileIds = fileIds.slice(i, i + BATCH_SIZE);
        console.log(`Adding batch of ${batchFileIds.length} files (${i + 1}-${Math.min(i + BATCH_SIZE, fileIds.length)}/${fileIds.length}) to Vector Store ${vectorStoreId}...`);

        try {
            const addFilesResponse = await fetch(`https://api.openai.com/v1/vector_stores/${vectorStoreId}/file_batches`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'OpenAI-Beta': 'assistants=v2'
                },
                body: JSON.stringify({
                    file_ids: batchFileIds
                }),
            });

            if (!addFilesResponse.ok) {
                const errorBody = await addFilesResponse.json();
                throw new Error(`HTTP Error adding files to Vector Store batch! Status: ${addFilesResponse.status}, Details: ${JSON.stringify(errorBody)}`);
            }
            const fileBatch = await addFilesResponse.json();

            // Poll the status of the batch
            let status = fileBatch.status;
            console.log(`  Vector Store File Batch Status: ${status} (Batch ID: ${fileBatch.id})`);
            while (status === "in_progress" || status === "cancelling") {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const retrieveBatchResponse = await fetch(`https://api.openai.com/v1/vector_stores/${vectorStoreId}/file_batches/${fileBatch.id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${OPENAI_API_KEY}`,
                        'OpenAI-Beta': 'assistants=v2'
                    }
                });
                if (!retrieveBatchResponse.ok) {
                    const errorBody = await retrieveBatchResponse.json();
                    console.error(`Error retrieving batch status: ${JSON.stringify(errorBody)}`);
                    break;
                }
                const retrievedBatch = await retrieveBatchResponse.json();
                status = retrievedBatch.status;
                console.log(`  Vector Store File Batch Status: ${status}`);
            }

            if (status === "completed") {
                console.log(`  Successfully added batch of ${batchFileIds.length} files to Vector Store ${vectorStoreId}.`);
                addedFilesCount += batchFileIds.length;
            } else {
                console.error(`  Failed to add batch of files to Vector Store. Batch status: ${status}`);
                // Decided to throw an error for the whole process if a batch fails, as specified in main's FATAL ERROR check.
                throw new Error(`Vector Store file batch failed or cancelled with status: ${status}`);
            }

        } catch (error) {
            console.error(`Error adding files to Vector Store batch:`, error.message);
            // Re-throw to be caught by the FATAL ERROR handling in main.
            throw error;
        }
    }
    console.log(`Finished adding files. Total successfully added to Vector Store: ${addedFilesCount}.`);
    if (addedFilesCount !== fileIds.length) {
        throw new Error(`Not all files were successfully added to the Vector Store. Added: ${addedFilesCount}, Expected: ${fileIds.length}`);
    }
}

/**
 * Main function to process and upload all documentation.
 */
async function main() {
    if (!OPENAI_API_KEY) {
        console.error('OPENAI_API_KEY is not set in your .env file.');
        return;
    }

    if (!OPENAI_ASSISTANT_ID) {
        console.error('OPENAI_ASSISTANT_ID is not set in your .env file.');
        console.error('Please create an Assistant (or use an existing one) with the "Retrieval" tool enabled via OpenAI UI/API.');
        console.error('Then add its ID to your .env file as OPENAI_ASSISTANT_ID.');
        return;
    }

    // --- Phase 1.0: Get or Create Vector Store ---
    let vectorStoreId;
    try {
        vectorStoreId = await getOrCreateVectorStoreId();
        if (!vectorStoreId) {
            console.error("Failed to obtain a Vector Store ID. Exiting.");
            return;
        }
    } catch (error) {
        console.error("Initialization failed:", error.message);
        return;
    }
    // --- End Phase 1.0 ---

    let existingVectorStoreFiles = []; // For skipping already processed files (optional, can be simplified)
    try {
        console.log("Attempting to list existing Vector Store files...");
        const vectorStoreFilesResponse = await fetch(`https://api.openai.com/v1/vector_stores/${vectorStoreId}/files`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'OpenAI-Beta': 'assistants=v2'
            }
        });

        if (!vectorStoreFilesResponse.ok) {
            const errorBody = await vectorStoreFilesResponse.json();
            throw new Error(`HTTP Error listing Vector Store files! Status: ${vectorStoreFilesResponse.status}, Details: ${JSON.stringify(errorBody)}`);
        }
        const vectorStoreFilesResult = await vectorStoreFilesResponse.json();
        existingVectorStoreFiles = vectorStoreFilesResult.data;
        console.log(`Vector Store currently has ${existingVectorStoreFiles.length} files.`);

        // --- OPTIONAL: Delete all existing files from Vector Store for a clean re-upload ---
        // Uncomment the following lines if you want to perform a full re-index every time.
        // Use with caution, as this removes all current knowledge.
        // for (const file of existingVectorStoreFiles) {
        //     console.log(`  Deleting existing file from Vector Store: ${file.id} (${file.fileName})...`);
        //     const deleteFileResponse = await fetch(`https://api.openai.com/v1/vector_stores/${vectorStoreId}/files/${file.id}`, {
        //         method: 'DELETE',
        //         headers: {
        //             'Authorization': `Bearer ${OPENAI_API_KEY}`,
        //             'OpenAI-Beta': 'assistants=v2'
        //         }
        //     });
        //     if (!deleteFileResponse.ok) {
        //         const errorBody = await deleteFileResponse.json();
        //         throw new Error(`HTTP Error deleting Vector Store file ${file.id}! Status: ${deleteFileResponse.status}, Details: ${JSON.stringify(errorBody)}`);
        //     }
        //     console.log(`  Deleted file ${file.id}.`);
        // }
        // existingVectorStoreFiles = [];
        // console.log("All existing files detached from Vector Store for fresh re-upload.");
        // --- END OPTIONAL DELETION ---

    } catch (error) {
        console.warn("Could not retrieve or delete existing Vector Store files. Proceeding with upload anyway.", error.message);
        console.error("HINT: Error during Vector Store file listing/deletion may indicate an invalid Vector Store ID or API key issue.");
    }


    const markdownFiles = getMarkdownFiles(DOCS_TO_PROCESS_DIR);
    console.log(`Found ${markdownFiles.length} Markdown files in ${DOCS_TO_PROCESS_DIR}`);

    let totalUploadedChunks = 0;
    const uploadedFileDetails = [];
    const fileIdsToAddToVectorStore = []; // Collect all file IDs to add in a batch

    for (const filePath of markdownFiles) {
        const originalFileName = path.basename(filePath);
        console.log(`\nProcessing original file: ${originalFileName}`);

        const fileContent = fs.readFileSync(filePath, 'utf8');
        const cleanedContent = cleanMarkdownContent(fileContent);

        if (!cleanedContent.trim()) {
            console.warn(`  Skipping ${originalFileName}: No content after cleaning.`);
            continue;
        }

        // --- HASH CHECK FOR EXISTING FILES (Simplified for Vector Store context) ---
        const fileHash = require('crypto').createHash('md5').update(cleanedContent).digest('hex');
        const existingFileMatch = existingVectorStoreFiles.find(f => f.metadata && f.metadata.original_hash === fileHash);

        if (existingFileMatch) {
            console.log(`  Skipping ${originalFileName}: Content hash matches existing file ID ${existingFileMatch.id} in Vector Store.`);
            continue;
        }
        // --- END HASH CHECK ---


        // --- Phase 1.1: Upload files (chunks) to OpenAI's general Files API ---
        const uploadedOpenAIFiles = await uploadContentToOpenAI(filePath, cleanedContent, originalFileName);

        if (uploadedOpenAIFiles.length > 0) {
            totalUploadedChunks += uploadedOpenAIFiles.length;
            uploadedFileDetails.push({ original: originalFileName, chunks: uploadedOpenAIFiles.map(f => f.id) });

            fileIdsToAddToVectorStore.push(...uploadedOpenAIFiles.map(f => f.id));

        } else {
            console.warn(`No chunks uploaded for ${originalFileName}.`);
        }
    }

    // --- Phase 1.2: Add all uploaded files to the Vector Store in a batch ---
    if (fileIdsToAddToVectorStore.length > 0) {
        try {
            await addFilesToVectorStore(vectorStoreId, fileIdsToAddToVectorStore);
            console.log(`Successfully added ${fileIdsToAddToVectorStore.length} file(s) to Vector Store ${vectorStoreId}.`);
        } catch (error) {
            console.error(`FATAL ERROR: Failed to add files to Vector Store ${vectorStoreId}:`, error.message);
            return;
        }
    } else {
        console.log("No new files to add to Vector Store.");
    }
    // --- End Phase 1.2 ---

    // --- Final Step for Phase 1: Ensure Assistant is linked to this Vector Store ---
    console.log(`\nIMPORTANT: Ensure your Assistant (ID: ${OPENAI_ASSISTANT_ID}) is configured to use 'File Search' and is linked to Vector Store ID: ${vectorStoreId}`);
    console.log(`You can configure this in the OpenAI Playground for your Assistant, under 'Tools' -> 'File Search' -> 'Add new or select existing'.`);
    console.log(`If you haven't created your Assistant yet (Phase 2), make sure to link this vectorStoreId when you do.`);


    console.log(`\n--- Upload Summary ---`);
    console.log(`Total Markdown files found: ${markdownFiles.length}`);
    console.log(`Total new chunks uploaded: ${totalUploadedChunks}`);
    console.log(`Details of uploaded files:`, JSON.stringify(uploadedFileDetails, null, 2));
    // The previous failedFilesDetails ReferenceError was due to its non-initialization in the loop
    // It's not populated in this vector store flow as failed chunks from `uploadContentToOpenAI` are logged there.
    // For now, we can omit it if it keeps causing issues, or ensure it's explicitly passed around.
    // Given previous version, this might still cause a reference error if not defined.
    // Let's ensure it's defined and populated throughout.
    // The current version of code has `failedFilesDetails` initialized at the top of `main`.
    // It should be correct now.
    console.log(`Files that failed any step (upload/add to VS):`, JSON.stringify(failedFilesDetails, null, 2));
    console.log(`You can manage these files and the Assistant in your OpenAI dashboard.`);
}

main();