<script setup lang="ts">
interface Star {
  x: number
  y: number
  size: number
  delay: number
  duration: number
  peak: number
}

const stars: Star[] = Array.from({ length: 110 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 1.6 + 0.6,
  delay: Math.random() * 6,
  duration: 3 + Math.random() * 4,
  peak: 0.4 + Math.random() * 0.5,
}))

const shootingStars = [
  { top: '12%', left: '78%', delay: '0s', duration: '9s' },
  { top: '34%', left: '18%', delay: '4.5s', duration: '11s' },
  { top: '62%', left: '88%', delay: '8s', duration: '10s' },
]
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
    <span
      v-for="(s, i) in shootingStars"
      :key="'shoot-' + i"
      class="shooting-star"
      :style="{ top: s.top, left: s.left, animationDelay: s.delay, animationDuration: s.duration }"
    />
  </div>
</template>

<style scoped>
.starfield {
  position: fixed;
  inset: 0;
  z-index: 0;
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

.shooting-star {
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: #fff;
  opacity: 0;
  animation-name: shoot;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
}

.shooting-star::before {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  width: 90px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.85));
  transform: translateY(-50%);
}

@keyframes shoot {
  0%, 88% {
    opacity: 0;
    transform: translate(0, 0);
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-360px, 220px);
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
  .shooting-star {
    animation: none;
    display: none;
  }
}
</style>
