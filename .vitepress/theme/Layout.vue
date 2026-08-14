<script setup>
import DefaultTheme from 'vitepress/theme'
import Feedback from './components/Feedback.vue'
import CopyPage from './components/CopyPage.vue'
import FeaturedImage from './components/FeaturedImage.vue'

// Single toggle to switch the on-page featured-image hero off everywhere.
const SHOW_FEATURED_HERO = true

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      <FeaturedImage v-if="SHOW_FEATURED_HERO" />
      <CopyPage />
    </template>
    <template #doc-footer-before>
      <Feedback />
    </template>
  </Layout>
</template>