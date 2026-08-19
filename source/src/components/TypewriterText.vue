<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{ phrases: string[] }>()
const text = ref('')
let phraseIndex = 0
let charIndex = 0
let deleting = false
let timer: number | undefined

function tick() {
  const current = props.phrases[phraseIndex]
  if (!deleting) {
    charIndex++
    text.value = current.slice(0, charIndex)
    if (charIndex === current.length) {
      deleting = true
      timer = window.setTimeout(tick, 1500)
      return
    }
  } else {
    charIndex--
    text.value = current.slice(0, charIndex)
    if (charIndex === 0) {
      deleting = false
      phraseIndex = (phraseIndex + 1) % props.phrases.length
    }
  }
  timer = window.setTimeout(tick, deleting ? 30 : 55)
}

onMounted(() => {
  timer = window.setTimeout(tick, 500)
})
onUnmounted(() => {
  if (timer) window.clearTimeout(timer)
})
</script>

<template>
  <span class="typewriter"
    >{{ text }}<span class="cursor" aria-hidden="true">|</span></span
  >
</template>

<style scoped>
.typewriter {
  font-family: var(--font-mono);
  color: var(--accent);
}

.cursor {
  display: inline-block;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
