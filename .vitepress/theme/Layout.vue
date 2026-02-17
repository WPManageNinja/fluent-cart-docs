<script setup>
import DefaultTheme from 'vitepress/theme'
import Feedback from './components/Feedback.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-footer-before>
      <Feedback />
    </template>
  </Layout>
</template>