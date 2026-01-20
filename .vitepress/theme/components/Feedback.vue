<script setup>
import { ref, reactive, watch } from 'vue' // <--- Import 'watch'
import { useData, useRoute } from 'vitepress'

// --- CONFIGURATION ---
// Paste your Google Web App URL here
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwQPG7SqKCME-siL3xkDqOwCJ1WHOGuZCQZnZO0-7GgYACxeb6lNT1mjpvkJXrG0QxbqQ/exec'
// 2. PRODUCT NAME for each product repo (e.g. 'FluentCRM', 'FluentForms')
const PRODUCT_NAME = 'FluentCart-user-docs'
// ---------------------

const { page } = useData()
const route = useRoute()

const state = reactive({
  voted: false,
  voting: false
})

// Watch for changes in the URL path. 
// If the user goes to a new page, reset the "voted" state.
watch(() => route.path, () => {
  state.voted = false
  state.voting = false
})

const submitFeedback = async (vote) => {
  state.voting = true
  
  const payload = JSON.stringify({
    product: PRODUCT_NAME,
    path: route.path,
    title: page.value.title,
    vote: vote
  })

try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Essential for skipping CORS checks
      headers: { 'Content-Type': 'text/plain' },
      body: payload
    })
    state.voted = true
  } catch (e) {
    console.error('Feedback Error:', e)
  } finally {
    state.voting = false
  }
}
</script>

<template>
  <div class="feedback-wrapper">
    <div v-if="!state.voted" class="feedback-container">
      <span class="label">Was this page helpful?</span>
      <div class="buttons">
        <button @click="submitFeedback('yes')" :disabled="state.voting" class="btn">
          👍 Yes
        </button>
        <button @click="submitFeedback('no')" :disabled="state.voting" class="btn">
          👎 No
        </button>
      </div>
    </div>
    <div v-else class="thank-you">
      Thanks for your feedback! 💜
    </div>
  </div>
</template>

<style scoped>
.feedback-wrapper {
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.feedback-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.label {
  font-weight: 600;
  font-size: 14px;
}

.buttons {
  display: flex;
  gap: 0.5rem;
}

.btn {
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  padding: 4px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}

.btn:hover {
  background-color: var(--vp-c-bg-mute);
}

.thank-you {
  font-weight: 600;
  color: var(--vp-c-brand);
}
</style>