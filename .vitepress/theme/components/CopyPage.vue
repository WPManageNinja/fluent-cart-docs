<script setup>
import { ref } from 'vue'

const copied = ref(false)

function copyPage() {
  const docEl = document.querySelector('.vp-doc')
  if (!docEl) return

  const text = docEl.innerText
  navigator.clipboard.writeText(text).then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  })
}
</script>

<template>
  <div class="copy-page-wrapper">
    <button class="copy-page-btn" @click="copyPage" :class="{ copied }">
      <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span>{{ copied ? 'Copied!' : 'Copy Docs' }}</span>
    </button>
  </div>
</template>

<style scoped>
.copy-page-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
}

.copy-page-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-page-btn:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
}

.copy-page-btn.copied {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}
</style>
