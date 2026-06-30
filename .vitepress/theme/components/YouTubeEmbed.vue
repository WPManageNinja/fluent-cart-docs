<script setup>
import { ref } from 'vue'

const props = defineProps({
  id: { type: String, required: true }
})

const loaded = ref(false)
</script>

<template>
  <div class="yt-wrap">
    <div class="yt-embed">
      <div
        v-if="!loaded"
        class="yt-facade"
        :style="{ backgroundImage: `url(https://img.youtube.com/vi/${id}/maxresdefault.jpg)` }"
        @click="loaded = true"
      >
        <button class="yt-play-btn" aria-label="Play video">
          <svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill="#f00" d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"/>
            <path fill="#fff" d="M45 24 27 14v20"/>
          </svg>
        </button>
      </div>
      <iframe
        v-if="loaded"
        :src="`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <a
      v-if="loaded"
      :href="`https://www.youtube.com/watch?v=${id}`"
      target="_blank"
      rel="noopener noreferrer"
      class="yt-fallback"
    >↗ Watch on YouTube</a>
  </div>
</template>

<style scoped>
.yt-wrap {
  margin: 1.5rem 0;
}

.yt-embed {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  background: #000;
  border-radius: 6px;
}

.yt-facade,
.yt-embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.yt-facade {
  background-size: cover;
  background-position: center;
  cursor: pointer;
}

.yt-play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 68px;
  height: 48px;
  filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.6));
  transition: transform 0.15s ease, filter 0.15s ease;
}

.yt-facade:hover .yt-play-btn {
  transform: translate(-50%, -50%) scale(1.12);
  filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.7));
}

.yt-fallback {
  display: block;
  margin-top: 6px;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  text-decoration: none;
  text-align: right;
}

.yt-fallback:hover {
  color: var(--vp-c-brand);
  text-decoration: underline;
}
</style>
