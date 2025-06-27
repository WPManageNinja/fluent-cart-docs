<template>
  <div class="breadcrumbs" v-if="items.length > 1">
    <span v-for="(item, index) in items" :key="index">
      <a v-if="index < items.length - 1" :href="item.link">{{ item.text }}</a>
      <span v-else class="current">{{ item.text }}</span>
      <span v-if="index < items.length - 1" class="separator">/</span>
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const items = computed(() => {
  const path = route.path
  const segments = path.split('/').filter(Boolean)
  
  const breadcrumbs = [
    { text: 'Home', link: '/' }
  ]

  let currentPath = ''
  segments.forEach(segment => {
    currentPath += `/${segment}`
    breadcrumbs.push({
      text: segment.replace(/-/g, ' ').replace(/^[a-z]/, c => c.toUpperCase()),
      link: currentPath
    })
  })

  return breadcrumbs
})
</script>

<style scoped>
.breadcrumbs {
  padding: 1rem 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.breadcrumbs a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

.breadcrumbs a:hover {
  text-decoration: underline;
}

.breadcrumbs .current {
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.breadcrumbs .separator {
  margin: 0 0.5rem;
  color: var(--vp-c-divider);
}
</style> 