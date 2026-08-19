<script setup lang="ts">
import { skillGroups } from '../data/portfolio'
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <span class="section-label">Toolbox</span>
      <h2 class="section-title">Skills</h2>
      <div class="groups">
        <div v-for="group in skillGroups" :key="group.category" class="group">
          <h3 class="group-title">{{ group.category }}</h3>
          <div class="chips">
            <span v-for="item in group.items" :key="item" class="tag">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.groups {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
}

.group-title {
  font-size: 0.95rem;
  color: var(--text);
  margin-bottom: 14px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
