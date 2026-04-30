<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
  file: { type: String, default: '' },
})

const code = ref('')
const lang = ref('')
const filename = ref('')
const loading = ref(true)
const error = ref('')

async function fetchGist() {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch(`https://api.github.com/gists/${props.id}`)
    if (!res.ok) throw new Error(`Failed to fetch gist (${res.status})`)
    const data = await res.json()
    const files = Object.values(data.files)
    const target = props.file
      ? files.find(f => f.filename === props.file)
      : files[0]
    if (!target) throw new Error('File not found in gist')
    code.value = target.content
    filename.value = target.filename
    const ext = target.filename.split('.').pop()
    const langMap = { php: 'php', js: 'javascript', ts: 'typescript', py: 'python', css: 'css', html: 'html', json: 'json', sh: 'bash', yml: 'yaml', yaml: 'yaml' }
    lang.value = langMap[ext] || ext
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}

onMounted(fetchGist)
watch(() => props.id, fetchGist)

function copyCode() {
  navigator.clipboard.writeText(code.value)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}

const copied = ref(false)
</script>

<template>
  <div class="gist-embed">
    <div v-if="loading" class="gist-loading">Loading gist...</div>
    <div v-else-if="error" class="gist-error">{{ error }}</div>
    <div v-else class="gist-content">
      <div class="gist-code-wrapper">
        <button class="gist-copy-btn" @click="copyCode" :class="{ copied }">
          <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          {{ copied ? 'Copied!' : 'Copy Code' }}
        </button>
        <pre><code>{{ code }}</code></pre>
      </div>
      <div class="gist-source">
        <a :href="`https://gist.github.com/${id}`" target="_blank" rel="noopener noreferrer">
          View on GitHub Gist ↗
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gist-embed {
  margin: 16px 0;
}

.gist-loading,
.gist-error {
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
}

.gist-loading {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
}

.gist-error {
  background: var(--vp-c-danger-soft);
  color: var(--vp-c-danger-1);
}

.gist-code-wrapper {
  position: relative;
}

.gist-copy-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 1;
}

.gist-copy-btn:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
}

.gist-copy-btn.copied {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.gist-content pre {
  margin: 0;
  border-radius: 8px;
  padding: 16px;
  padding-top: 48px;
  background: var(--vp-code-block-bg);
  overflow-x: auto;
}

.gist-content code {
  font-family: var(--vp-font-family-mono);
  font-size: var(--vp-code-font-size);
  color: var(--vp-c-text-1);
}

.gist-source {
  margin-top: 6px;
  font-size: 12px;
}

.gist-source a {
  color: var(--vp-c-text-3);
  text-decoration: none;
}

.gist-source a:hover {
  color: var(--vp-c-brand-1);
}
</style>
