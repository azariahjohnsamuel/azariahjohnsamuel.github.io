<script setup lang="ts">
import { computed } from 'vue'
import { skillIcons } from '../data/skillIcons'

const props = defineProps<{ name: string }>()
const icon = computed(() => skillIcons[props.name])
const initial = computed(() => props.name.replace(/[^A-Za-z0-9]/, '').charAt(0).toUpperCase())
</script>

<template>
  <span class="skill-chip" :style="{ '--brand': icon?.hex ?? 'var(--accent)' }">
    <span class="icon-badge">
      <svg v-if="icon" class="icon" viewBox="0 0 24 24" aria-hidden="true">
        <path :d="icon.path" />
      </svg>
      <span v-else class="monogram" aria-hidden="true">{{ initial }}</span>
    </span>
    <span class="name">{{ name }}</span>
  </span>
</template>

<style scoped>
.skill-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px 6px 8px;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 0.82rem;
  font-family: var(--font-mono);
  transition: border-color 0.3s var(--ease), color 0.3s var(--ease), transform 0.3s var(--ease),
    box-shadow 0.3s var(--ease);
}

.icon-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.icon {
  width: 15px;
  height: 15px;
  fill: var(--text-muted);
  transition: fill 0.35s var(--ease), transform 0.45s var(--ease);
}

.monogram {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--border);
  font-size: 0.6rem;
  color: var(--text-muted);
  transition: border-color 0.3s var(--ease), color 0.3s var(--ease);
}

.name {
  transition: color 0.3s var(--ease);
}

.skill-chip:hover {
  border-color: var(--brand);
  color: var(--text);
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 10px 24px -14px var(--brand);
}

.skill-chip:hover .icon {
  fill: var(--brand);
  transform: rotate(-8deg) scale(1.15);
}

.skill-chip:hover .monogram {
  border-color: var(--brand);
  color: var(--brand);
}

@media (prefers-reduced-motion: reduce) {
  .skill-chip,
  .icon,
  .monogram,
  .name {
    transition: none;
  }
}
</style>
