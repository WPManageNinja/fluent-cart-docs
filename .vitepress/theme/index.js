import DefaultTheme from 'vitepress/theme'
import Breadcrumbs from './components/Breadcrumbs.vue'
import './style.css'
import Feedback from './components/Feedback.vue' // Import the file for feedback widget
import GistEmbed from './components/GistEmbed.vue'
import YouTubeEmbed from './components/YouTubeEmbed.vue'
import Layout from './Layout.vue' // Import new layout file
import ZoomableImage from './components/ZoomableImage.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Breadcrumbs', Breadcrumbs)
    app.component('Feedback', Feedback)
    app.component('GistEmbed', GistEmbed)
    app.component('YouTubeEmbed', YouTubeEmbed)
    // Register ZoomableImage component globally
    // This ensures it's available for markdown rendering
    if (!app.component('ZoomableImage')) {
      app.component('ZoomableImage', ZoomableImage)
    }
  }
} 