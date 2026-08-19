<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const container = ref<HTMLElement | null>(null)
const glyphs = ['✦', '✧', '·']
const colors = ['var(--accent)', 'var(--accent-blue)', 'var(--accent-violet)']

let lastSpawn = 0
let bound = false

function spawn(x: number, y: number) {
  const el = container.value
  if (!el) return

  const star = document.createElement('span')
  star.className = 'sparkle'
  star.textContent = glyphs[Math.floor(Math.random() * glyphs.length)]

  const size = 7 + Math.random() * 9
  const dx = (Math.random() - 0.5) * 70
  const fall = 46 + Math.random() * 64
  const duration = 650 + Math.random() * 500
  const color = colors[Math.floor(Math.random() * colors.length)]

  star.style.left = `${x}px`
  star.style.top = `${y}px`
  star.style.fontSize = `${size}px`
  star.style.color = color
  star.style.setProperty('--dx', `${dx}px`)
  star.style.setProperty('--fall', `${fall}px`)
  star.style.animationDuration = `${duration}ms`

  star.addEventListener('animationend', () => star.remove(), { once: true })
  el.appendChild(star)
}

function onMove(e: MouseEvent) {
  const now = performance.now()
  if (now - lastSpawn < 45) return
  lastSpawn = now
  spawn(e.clientX, e.clientY)
}

onMounted(() => {
  const canHover = window.matchMedia?.('(hover: hover)').matches
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  if (canHover && !reduceMotion) {
    bound = true
    window.addEventListener('mousemove', onMove, { passive: true })
  }
})
onUnmounted(() => {
  if (bound) window.removeEventListener('mousemove', onMove)
})
</script>

<template>
  <div ref="container" class="sparkle-field" aria-hidden="true" />
</template>

<style scoped>
.sparkle-field {
  position: fixed;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  overflow: hidden;
}

.sparkle-field :deep(.sparkle) {
  position: fixed;
  transform: translate(-50%, -50%);
  line-height: 1;
  will-change: transform, opacity;
  animation-name: sparkle-fall;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  text-shadow: 0 0 6px currentColor;
}

@keyframes sparkle-fall {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) translate(0, 0) rotate(0deg) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) translate(var(--dx), var(--fall)) rotate(180deg) scale(0.35);
  }
}
</style>
