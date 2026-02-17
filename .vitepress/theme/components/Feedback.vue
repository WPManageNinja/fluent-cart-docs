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
  userVoted: false,
  userVoteType: null, // 'yes' or 'no'
  sending: false,
  commentSent: false,
  showCommentBox: false
})

const feedbackText = ref('')

// Reset state when user goes to a new page
watch(() => route.path, () => {
  state.userVoted = false
  state.userVoteType = null
  state.commentSent = false
  state.showCommentBox = false
  feedbackText.value = ''
})

const sendData = async (voteType, messageText = '') => {
  const payload = JSON.stringify({
    product: PRODUCT_NAME,
    path: route.path,
    title: page.value.title,
    vote: voteType,
    message: messageText
  })

  // Use no-cors to avoid browser restriction errors
  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body: payload
  })
}

const handleVote = async (type) => {
  if (state.userVoted && state.userVoteType === type) return // Prevent double clicks
  
  state.sending = true
  try {
    await sendData(type)
    state.userVoted = true
    state.userVoteType = type
    
    // UX Improvement: If they vote NO, auto-open the comment box
    if (type === 'no') {
      state.showCommentBox = true
    }
  } finally {
    state.sending = false
  }
}

const toggleCommentBox = () => {
  state.showCommentBox = !state.showCommentBox
}

const submitMessage = async () => {
  if (!feedbackText.value.trim()) return
  
  state.sending = true
  try {
    // We send 'comment' as the vote type so it doesn't mess up Yes/No stats
    await sendData('comment', feedbackText.value)
    state.commentSent = true
    state.showCommentBox = false // Hide box after sending
  } finally {
    state.sending = false
  }
}
</script>

<template>
  <div class="feedback-wrapper">
    <div class="feedback-header">
      <span class="title">Was this page helpful?</span>
    </div>

    <div class="actions-row">
      <button 
        @click="handleVote('yes')" 
        class="btn" 
        :class="{ active: state.userVoteType === 'yes' }"
        :disabled="state.sending"
      >
        👍 Yes
      </button>
      
      <button 
        @click="handleVote('no')" 
        class="btn" 
        :class="{ active: state.userVoteType === 'no' }"
        :disabled="state.sending"
      >
        👎 No
      </button>

      <button 
        @click="toggleCommentBox" 
        class="btn text-btn"
      >
        💬 {{ state.showCommentBox ? 'Close' : 'Feedback' }}
      </button>
    </div>

    <div v-if="state.showCommentBox && !state.commentSent" class="comment-area">
      <textarea 
        v-model="feedbackText" 
        placeholder="How can we improve this specific page?"
        class="input-box"
      ></textarea>
      <button @click="submitMessage" :disabled="state.sending" class="submit-btn">
        {{ state.sending ? 'Sending...' : 'Send Feedback' }}
      </button>
    </div>

    <div v-if="state.commentSent" class="success-msg">
      Thanks for your feedback! 💜
    </div>
  </div>
</template>

<style scoped>
.feedback-wrapper {
  margin-top: 3rem;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  /* --- CENTERING MAGIC STARTS HERE --- */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers the children (header, buttons, form) */
  text-align: center;  /* Centers the text */
}

.feedback-header { margin-bottom: 1rem; }
.title { font-weight: 600; font-size: 1.1rem; }

.actions-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn {
  padding: 6px 16px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn:hover { background-color: var(--vp-c-bg-mute); transform: translateY(-1px); }

/* Highlight the selected vote */
.btn.active { 
  border-color: var(--vp-c-brand); 
  color: var(--vp-c-brand); 
  background-color: var(--vp-c-bg-alt);
}

.text-btn { color: var(--vp-c-text-2); }

.comment-area { margin-top: 15px; display: flex; flex-direction: column; gap: 10px; max-width: 450px;}
.comment-area textarea { min-width: 450px;}

.input-box {
  width: 100%;
  min-height: 80px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  font-size: 14px;
}

.submit-btn {
  align-self: center;
  padding: 6px 20px;
  background-color: var(--vp-c-brand);
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;
}


.success-msg { margin-top: 15px; font-weight: 600; color: var(--vp-c-brand); }
</style>