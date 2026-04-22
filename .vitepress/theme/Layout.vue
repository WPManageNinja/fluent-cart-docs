<script setup>
import DefaultTheme from 'vitepress/theme'
import Feedback from './components/Feedback.vue'
import CopyPage from './components/CopyPage.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      <CopyPage />
    </template>
    <template #doc-footer-before>
      <Feedback />
    </template>
  </Layout>
</template>