<script setup lang="ts">
import { profile } from '../data/portfolio'
</script>

<template>
  <div class="planet-wrap">
    <div class="orbit orbit-outer" aria-hidden="true"><span class="satellite satellite-outer" /></div>
    <div class="orbit orbit-inner" aria-hidden="true"><span class="satellite satellite-inner" /></div>
    <div class="glow" aria-hidden="true" />
    <div class="planet">
      <img class="avatar" src="/assets/profile-pic.png" :alt="profile.displayName" />
    </div>
  </div>
</template>

<style scoped>
.planet-wrap {
  position: relative;
  width: 168px;
  height: 168px;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate3d(calc(var(--px, 0) * 18px), calc(var(--py, 0) * 18px), 0);
  transition: transform 0.5s var(--ease);
}

.glow {
  position: absolute;
  inset: 20px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
  filter: blur(22px);
  opacity: 0.5;
  animation: breathe 5s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% {
    transform: scale(1);
    opacity: 0.42;
  }
  50% {
    transform: scale(1.14);
    opacity: 0.7;
  }
}

.orbit {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed rgba(148, 163, 184, 0.28);
}

.orbit-outer {
  inset: 0;
  animation: spin 16s linear infinite;
}

.orbit-inner {
  inset: 24px;
  animation: spin 10s linear infinite reverse;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.satellite {
  position: absolute;
  top: -3px;
  left: 50%;
  width: 7px;
  height: 7px;
  margin-left: -3.5px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 10px 2px var(--accent);
}

.satellite-inner {
  background: var(--accent-blue);
  box-shadow: 0 0 10px 2px var(--accent-blue);
}

.planet {
  position: relative;
  width: 104px;
  height: 104px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, var(--accent), var(--accent-blue), var(--accent-violet));
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  border: 3px solid var(--bg);
}

@media (prefers-reduced-motion: reduce) {
  .planet-wrap {
    transition: none;
    transform: none;
  }
  .glow,
  .orbit-outer,
  .orbit-inner {
    animation: none;
  }
}
</style>
