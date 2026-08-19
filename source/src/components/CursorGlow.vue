<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const glowEl = ref<HTMLElement | null>(null)
let raf = 0
let active = false

function onMove(e: MouseEvent) {
  if (!active) {
    active = true
    glowEl.value?.style.setProperty('--glow-opacity', '1')
  }
  if (raf) return
  raf = requestAnimationFrame(() => {
    raf = 0
    glowEl.value?.style.setProperty('--gx', `${e.clientX}px`)
    glowEl.value?.style.setProperty('--gy', `${e.clientY}px`)
  })
}

onMounted(() => {
  if (window.matchMedia?.('(hover: hover)').matches) {
    window.addEventListener('mousemove', onMove, { passive: true })
  }
})
onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
  if (raf) cancelAnimationFrame(raf)
})
</script>

<template>
  <div ref="glowEl" class="cursor-glow" aria-hidden="true" />
</template>

<style scoped>
.cursor-glow {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: var(--glow-opacity, 0);
  transition: opacity 0.6s var(--ease);
  background: radial-gradient(
    420px circle at var(--gx, 50%) var(--gy, 50%),
    rgba(94, 234, 212, 0.06),
    transparent 70%
  );
}

@media (prefers-reduced-motion: reduce) {
  .cursor-glow {
    display: none;
  }
}
</style>
