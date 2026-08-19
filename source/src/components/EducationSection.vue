<script setup lang="ts">
import { education } from '../data/portfolio'
</script>

<template>
  <section id="education" class="section">
    <div class="container">
      <span class="section-label">Background</span>
      <h2 class="section-title">Education</h2>
      <div class="grid">
        <div v-for="item in education" :key="item.title" class="card edu">
          <h3 class="degree">{{ item.title }}</h3>
          <p class="course">{{ item.course }}</p>
          <p class="institution">{{ item.institution }}</p>
          <p class="year">{{ item.year }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}

.degree {
  font-size: 1rem;
  color: var(--accent);
  margin-bottom: 6px;
}

.course {
  font-size: 0.92rem;
  margin-bottom: 4px;
}

.institution {
  color: var(--text-muted);
  font-size: 0.88rem;
  margin-bottom: 8px;
}

.year {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
}
</style>
