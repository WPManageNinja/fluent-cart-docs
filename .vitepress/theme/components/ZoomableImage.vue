<template>
  <div ref="wrapperRef" class="image-wrapper">
    <div
      class="image-container"
      :class="{ clicked: isZoomed }"
      @click.stop="toggleZoom"
    >
      <div class="image-padding-wrapper">
        <img ref="imgRef" :src="src" :alt="alt" :key="src" loading="lazy" />
      </div>
    </div>
    <div v-if="isZoomed" class="overlay" @click.stop="toggleZoom"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";
import { useRoute, inBrowser } from "vitepress";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
});

// Only use router on client side
const route = inBrowser ? useRoute() : null;

const wrapperRef = ref(null);
const imgRef = ref(null);
const isZoomed = ref(false);
const justOpened = ref(false);
const listenersAttached = ref(false);

const toggleZoom = (e) => {
  e?.stopPropagation();

  if (isZoomed.value) {
    closeZoom();
  } else {
    openZoom();
  }
};

const openZoom = () => {
  isZoomed.value = true;
  justOpened.value = true;

  nextTick(() => {
    centerImageInViewport();
    setTimeout(() => {
      justOpened.value = false;
    }, 200);
  });
};

const closeZoom = () => {
  isZoomed.value = false;
  justOpened.value = false;

  if (imgRef.value) {
    imgRef.value.style.transform = "";
  }
};

const centerImageInViewport = () => {
  if (!imgRef.value) return;

  const imgRect = imgRef.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  const padding = 20;
  const targetWidth = viewportWidth - padding;
  const targetHeight = viewportHeight - padding;

  const currentWidth = imgRect.width;
  const currentHeight = imgRect.height;

  const scaleX = targetWidth / currentWidth;
  const scaleY = targetHeight / currentHeight;
  const scaleFactor = Math.min(scaleX, scaleY);

  const viewportCenterY = viewportHeight / 2;
  const viewportCenterX = viewportWidth / 2;

  const translateY = viewportCenterY - (imgRect.top + imgRect.height / 2);
  const translateX = viewportCenterX - (imgRect.left + imgRect.width / 2);

  imgRef.value.style.transform = `scale(${scaleFactor}) translate(${translateX / scaleFactor}px, ${translateY / scaleFactor}px)`;
};

const handleScroll = () => {
  if (isZoomed.value && !justOpened.value) {
    closeZoom();
  }
};

const handleClickOutside = (e) => {
  if (
    isZoomed.value &&
    wrapperRef.value &&
    !wrapperRef.value.contains(e.target)
  ) {
    closeZoom();
  }
};

const handleKeydown = (e) => {
  if (e.key === "Escape" && isZoomed.value) {
    closeZoom();
  }
};

const handleResize = () => {
  if (isZoomed.value) {
    centerImageInViewport();
  }
};

const attachEventListeners = () => {
  if (listenersAttached.value) return;

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleResize, { passive: true });
  window.addEventListener("keydown", handleKeydown);
  document.addEventListener("click", handleClickOutside);

  listenersAttached.value = true;
};

const detachEventListeners = () => {
  if (!listenersAttached.value) return;

  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("keydown", handleKeydown);
  document.removeEventListener("click", handleClickOutside);

  listenersAttached.value = false;
};

const cleanup = () => {
  closeZoom();
  detachEventListeners();
};

// Watch for route changes and cleanup (only on client side)
if (route) {
  watch(
    () => route.path,
    () => {
      cleanup();
    }
  );
}

onMounted(() => {
  nextTick(() => {
    if (imgRef.value) {
      imgRef.value.style.cursor = "zoom-in";
      imgRef.value.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
      imgRef.value.style.transformOrigin = "center center";
    }

    attachEventListeners();
  });
});

onBeforeUnmount(() => {
  cleanup();
});
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

.image-padding-wrapper {
  padding: 0;
  transition: padding 0.3s ease;
}

.image-container img {
  height: auto;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: block;
  margin: 0 auto;
  cursor: zoom-in;
  transform-origin: center center;
}

.image-container.clicked {
  z-index: 999999;
  position: relative;
}

.image-container.clicked .image-padding-wrapper {
  padding: 50px;
}

.image-container.clicked img {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  cursor: zoom-out;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999998;
  transition: opacity 0.3s ease;
}

@media (max-width: 767px) {
  .image-container.clicked .image-padding-wrapper {
    padding: 20px; /* Less padding on mobile for better visibility */
  }
}
</style>
