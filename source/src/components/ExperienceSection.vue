<script setup lang="ts">
import { experience } from '../data/portfolio'
import { formatRange, durationLabel } from '../utils/format'
</script>

<template>
  <section id="experience" class="section" v-zoom-section>
    <div class="container">
      <span class="section-label" v-reveal>Career</span>
      <h2 class="section-title" v-reveal="60">Experience</h2>
      <ol class="timeline">
        <li
          v-for="(job, index) in experience"
          :key="`${job.company}-${job.title}-${job.start}`"
          class="entry-row"
          v-reveal="index * 90"
        >
          <div class="rail" aria-hidden="true">
            <span class="node" :class="{ current: !job.end }">
              <span class="node-core" />
            </span>
          </div>
          <div class="entry">
            <div class="entry-header">
              <div>
                <h3 class="role">{{ job.title }}</h3>
                <p class="company">
                  {{ job.company }}
                  <span v-if="job.location" class="location">· {{ job.location }}</span>
                </p>
              </div>
              <div class="period">
                <span>{{ formatRange(job.start, job.end) }}</span>
                <span class="duration">{{ durationLabel(job.start, job.end) }}</span>
              </div>
            </div>
            <p v-if="job.project" class="clients">Product: {{ job.project }}</p>
            <p v-if="job.clients?.length" class="clients">Client: {{ job.clients.join(', ') }}</p>
            <p class="summary">{{ job.summary }}</p>
            <ul class="highlights">
              <li v-for="point in job.highlights" :key="point">{{ point }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.entry-row {
  display: flex;
  gap: 16px;
}

.rail {
  position: relative;
  width: 24px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
}

.rail::before {
  content: '';
  position: absolute;
  top: 6px;
  bottom: -20px;
  width: 2px;
  background: linear-gradient(var(--accent-strong), var(--accent-blue), var(--accent-violet));
  opacity: 0.32;
}

.entry-row:last-child .rail::before {
  bottom: 0;
}

.node {
  position: relative;
  z-index: 1;
  margin-top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg);
  border: 2px solid var(--accent-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 4px var(--bg);
}

.node-core {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-strong);
}

.node.current {
  border-color: var(--accent);
}

.node.current .node-core {
  background: var(--accent);
  box-shadow: 0 0 8px 2px var(--accent);
  animation: node-pulse 1.8s ease-in-out infinite;
}

@keyframes node-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

.entry {
  flex: 1;
  min-width: 0;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px 28px;
}

.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.role {
  font-size: 1.1rem;
}

.company {
  color: var(--text-muted);
  margin-top: 2px;
  font-weight: 500;
}

.location {
  font-weight: 400;
}

.period {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.duration {
  color: var(--accent);
  font-size: 0.78rem;
}

.clients {
  font-size: 0.85rem;
  color: var(--accent);
  font-family: var(--font-mono);
  margin-bottom: 10px;
}

.summary {
  color: var(--text-muted);
  margin-bottom: 14px;
}

.highlights {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.highlights li {
  position: relative;
  padding-left: 18px;
  font-size: 0.94rem;
  color: var(--text);
}

.highlights li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}

@media (max-width: 640px) {
  .rail {
    width: 18px;
  }
  .entry {
    padding: 20px 18px;
  }
  .period {
    align-items: flex-start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .node.current .node-core {
    animation: none;
  }
}
</style>
