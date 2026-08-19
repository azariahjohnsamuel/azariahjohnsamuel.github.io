<script setup lang="ts">
import { experience } from '../data/portfolio'
import { formatRange, durationLabel } from '../utils/format'
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <span class="section-label">Career</span>
      <h2 class="section-title">Experience</h2>
      <ol class="timeline">
        <li v-for="job in experience" :key="`${job.company}-${job.title}-${job.start}`" class="entry">
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
          <p v-if="job.clients?.length" class="clients">Client: {{ job.clients.join(', ') }}</p>
          <p class="summary">{{ job.summary }}</p>
          <ul class="highlights">
            <li v-for="point in job.highlights" :key="point">{{ point }}</li>
          </ul>
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
}

.entry {
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent-strong);
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
</style>
