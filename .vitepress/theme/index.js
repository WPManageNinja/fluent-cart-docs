import DefaultTheme from 'vitepress/theme';
import './custom.css';
import ZoomableImage from './components/ZoomableImage.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ZoomableImage', ZoomableImage);
  }
};