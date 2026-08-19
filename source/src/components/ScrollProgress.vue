<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const progress = ref(0)

function update() {
  const scrollTop = window.scrollY
  const height = document.documentElement.scrollHeight - window.innerHeight
  progress.value = height > 0 ? (scrollTop / height) * 100 : 0
}

onMounted(() => {
  window.addEventListener('scroll', update, { passive: true })
  update()
})
onUnmounted(() => window.removeEventListener('scroll', update))
</script>

<template>
  <div class="progress-track" aria-hidden="true">
    <div class="progress-fill" :style="{ width: progress + '%' }" />
  </div>
</template>

<style scoped>
.progress-track {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 50;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-blue), var(--accent-violet));
  transition: width 0.1s linear;
}
</style>
