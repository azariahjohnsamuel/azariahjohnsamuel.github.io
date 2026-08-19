<script setup lang="ts">
import { skillGroups } from '../data/portfolio'
import SkillChip from './SkillChip.vue'
</script>

<template>
  <section id="skills" class="section" v-zoom-section>
    <div class="container">
      <span class="section-label" v-reveal>Toolbox</span>
      <h2 class="section-title" v-reveal="60">Skills</h2>
      <div class="groups">
        <div
          v-for="(group, index) in skillGroups"
          :key="group.category"
          class="group"
          v-reveal="index * 70"
        >
          <h3 class="group-title">{{ group.category }}</h3>
          <div class="chips">
            <SkillChip
              v-for="(item, i) in group.items"
              :key="item"
              :name="item"
              v-reveal="i * 40"
            />
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
