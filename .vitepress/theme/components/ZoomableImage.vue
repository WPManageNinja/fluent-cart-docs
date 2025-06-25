<template>
  <div class="image-wrapper">
    <div class="image-container" :class="{ clicked: isZoomed }" @click.stop="toggleZoom">
      <img 
        :src="src" 
        :alt="alt"
        ref="img"
      />
    </div>
    <div v-if="isZoomed" class="overlay" @click.stop="toggleZoom"></div>
  </div>
</template>

<script>
export default {
  name: 'ZoomableImage',
  props: {
    src: String,
    alt: String
  },
  data() {
    return {
      isZoomed: false
    }
  },
  methods: {
    toggleZoom(e) {
      e.stopPropagation();
      this.isZoomed = !this.isZoomed;
    },
    handleScroll() {
      if (this.isZoomed) {
        this.isZoomed = false;
      }
    },
    handleClickOutside(e) {
      if (this.isZoomed && !this.$el.contains(e.target)) {
        this.isZoomed = false;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('click', this.handleClickOutside);
  }
}
</script>

<style>
.image-wrapper {
  position: relative;
  width: 100%;
  margin: 16px 0;
}

.image-container {
  position: relative;
  z-index: 1;
}

.image-container img {
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: block;
  margin: 0 auto;
  cursor: zoom-in;
}

.image-container.clicked {
  z-index: 999999;
  position: relative;
}

.image-container.clicked img {
  transform: scale(2.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: zoom-out;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999998;
  transition: opacity 0.3s ease;
}

@media (max-width: 767px) {
  .image-container.clicked img {
    transform: scale(2.05);
  }
}
</style>