<script setup lang="ts">
interface Star {
  x: number
  y: number
  size: number
  delay: number
  duration: number
  peak: number
}

const stars: Star[] = Array.from({ length: 60 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 1.6 + 0.6,
  delay: Math.random() * 6,
  duration: 3 + Math.random() * 4,
  peak: 0.4 + Math.random() * 0.5,
}))
</script>

<template>
  <div class="starfield" aria-hidden="true">
    <span
      v-for="(star, i) in stars"
      :key="i"
      class="star"
      :style="{
        left: star.x + '%',
        top: star.y + '%',
        width: star.size + 'px',
        height: star.size + 'px',
        animationDelay: star.delay + 's',
        animationDuration: star.duration + 's',
        '--peak': star.peak,
      }"
    />
  </div>
</template>

<style scoped>
.starfield {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  transform: translate3d(calc(var(--px, 0) * -14px), calc(var(--py, 0) * -8px), 0);
  transition: transform 0.6s var(--ease);
}

.star {
  position: absolute;
  border-radius: 50%;
  background: #fff;
  opacity: 0.2;
  animation-name: twinkle;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.15;
    transform: scale(0.7);
  }
  50% {
    opacity: var(--peak, 0.8);
    transform: scale(1.2);
  }
}

@media (prefers-reduced-motion: reduce) {
  .starfield {
    transition: none;
    transform: none;
  }
  .star {
    animation: none;
    opacity: 0.4;
  }
}
</style>
