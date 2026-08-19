<script setup lang="ts">
const chips = [
  { label: 'STACK', value: 'Vue 3 · TypeScript · .NET', top: '10%', right: '4%' },
  { label: 'AUTH', value: 'Keycloak · Entra ID · OAuth 2.0', top: '34%', right: '-1%' },
  { label: 'STATUS', value: 'Open to new opportunities', top: '58%', right: '7%', live: true },
]
</script>

<template>
  <div class="hud" aria-hidden="true">
    <div
      v-for="(chip, i) in chips"
      :key="chip.label"
      class="chip"
      v-reveal="600 + i * 160"
      :style="{ top: chip.top, right: chip.right, animationDelay: i * 0.7 + 's' }"
    >
      <span class="chip-label">
        <span v-if="chip.live" class="dot" />{{ chip.label }}
      </span>
      <span class="chip-value">{{ chip.value }}</span>
    </div>
  </div>
</template>

<style scoped>
.hud {
  position: absolute;
  inset: 0;
  pointer-events: none;
  display: none;
  z-index: 1;
}

@media (min-width: 980px) {
  .hud {
    display: block;
  }
}

.chip {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 14px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: rgba(20, 26, 38, 0.55);
  backdrop-filter: blur(6px);
  max-width: 220px;
  animation: bob 7s ease-in-out infinite;
}

.chip-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: var(--accent);
}

.chip-value {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 6px 1px var(--accent);
  animation: pulse 1.8s ease-in-out infinite;
}

@keyframes bob {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-9px);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
}

@media (prefers-reduced-motion: reduce) {
  .chip,
  .dot {
    animation: none;
  }
}
</style>
