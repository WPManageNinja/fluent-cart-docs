// api/docs-query.js (for Vercel/Netlify Functions)

const OpenAI = require('openai'); // Make sure you've installed 'openai' in your project
                                  // and it's listed in package.json dependencies.

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Accessed securely from environment variables
});

const ASSISTANT_ID = process.env.OPENAI_ASSISTANT_ID; // Your Assistant ID

module.exports = async (req, res) => {
    // Ensure this is a POST request
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // Parse the request body
    const { message, threadId } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required.' });
    }

    if (!ASSISTANT_ID) {
        console.error("OPENAI_ASSISTANT_ID is not set.");
        return res.status(500).json({ error: 'Assistant ID is not configured.' });
    }

    let currentThreadId = threadId;
    try {
        // 1. Create or retrieve a Thread
        if (!currentThreadId) {
            const thread = await openai.beta.threads.create();
            currentThreadId = thread.id;
        }

        // 2. Add the user's message to the Thread
        await openai.beta.threads.messages.create(
            currentThreadId,
            {
                role: "user",
                content: message,
            }
        );

        // 3. Run the Assistant on the Thread
        // The Assistant will automatically use its attached files for Retrieval.
        const run = await openai.beta.threads.runs.create(
            currentThreadId,
            {
                assistant_id: ASSISTANT_ID,
            }
        );

        // 4. Poll for the Assistant's response (simplified polling for serverless context)
        // In a real-world app, you might use webhooks or more robust long-polling.
        // For a serverless function, a short polling loop is often acceptable.
        let runStatus = await openai.beta.threads.runs.retrieve(
            currentThreadId,
            run.id
        );

        // Wait until the run is 'completed' or 'failed'
        while (runStatus.status === "queued" || runStatus.status === "in_progress" || runStatus.status === "cancelling") {
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
            runStatus = await openai.beta.threads.runs.retrieve(
                currentThreadId,
                run.id
            );
        }

        if (runStatus.status === 'completed') {
            // 5. Retrieve the Assistant's final message
            const messages = await openai.beta.threads.messages.list(
                currentThreadId,
                { order: 'desc', limit: 1 } // Get the latest message
            );

            const assistantMessage = messages.data[0];
            const responseContent = assistantMessage.content.find(
                (content) => content.type === 'text'
            );

            return res.status(200).json({
                response: responseContent ? responseContent.text.value : 'No response from Assistant.',
                threadId: currentThreadId // Return thread ID for continued conversation
            });
        } else {
            return res.status(500).json({ error: `Assistant run failed: ${runStatus.status}` });
        }

    } catch (error) {
        console.error('Error interacting with OpenAI Assistant:', error);
        return res.status(500).json({ error: 'Failed to get response from Assistant.' });
    }
};