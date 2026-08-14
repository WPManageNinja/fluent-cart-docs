<script setup>
import { computed, ref, watch } from 'vue'
import { useData } from 'vitepress'

// Naming rule duplicated (not imported) from
// scripts/generate-featured-images.mjs buildNameParts() / the matching
// block in .vitepress/config.mjs — this is a client-side component with no
// fs access, so it must recompute the URL from relativePath at runtime.
// Keep this in sync with those two implementations if the rule changes.
function buildImageUrl(relativePath) {
  if (!relativePath || !relativePath.startsWith('guide/')) return null

  const guideRelPath = relativePath.slice('guide/'.length)
  const parts = guideRelPath.split('/')
  const section = parts[0]
  const rest = parts.slice(1)

  // No page lives directly at guide/<file>.md except changelog.md, which is
  // intentionally excluded (no generated image) — this also naturally
  // excludes it here since it has no section subfolder.
  if (rest.length === 0) return null

  const filename = rest[rest.length - 1].replace(/\.md$/, '')
  let slug
  if (filename === 'index') {
    if (rest.length === 1) {
      // guide/<section>/index.md
      slug = 'index'
    } else {
      // nested index.md: fold intervening folder names into the slug
      const parents = rest.slice(0, -1).join('-')
      slug = `${parents}-index`
    }
  } else {
    slug = filename
  }

  return `/images/featured/${section}--${slug}.png`
}

const { page } = useData()

const hidden = ref(false)

const imageUrl = computed(() => buildImageUrl(page.value.relativePath))

// A 404 on one page must not permanently hide the hero on later pages
// navigated to via the SPA router, so reset the error state on every
// route change.
watch(
  () => page.value.relativePath,
  () => {
    hidden.value = false
  }
)

function handleError() {
  hidden.value = true
}
</script>

<template>
  <img
    v-if="imageUrl && !hidden"
    :src="imageUrl"
    :alt="page.title"
    class="featured-hero-image"
    @error="handleError"
  />
</template>

<style scoped>
.featured-hero-image {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 24px;
}
</style>
