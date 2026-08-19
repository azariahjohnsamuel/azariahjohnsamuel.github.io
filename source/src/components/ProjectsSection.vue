<script setup lang="ts">
import { projects } from '../data/portfolio'
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <span class="section-label" v-reveal>Selected Work</span>
      <h2 class="section-title" v-reveal="60">Projects</h2>
      <div class="grid">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="card project"
          v-reveal="index * 80"
          v-tilt
        >
          <header class="project-header">
            <span v-if="project.logo" class="logo-badge">
              <img :src="project.logo" :alt="project.tagName" class="logo" />
            </span>
            <h3 class="project-title">{{ project.title }}</h3>
          </header>
          <p class="skills">{{ project.skills }}</p>
          <p class="description">{{ project.description }}</p>
          <p class="responsibilities"><strong>Role:</strong> {{ project.responsibilities }}</p>
          <p class="meta">{{ project.size }} · {{ project.location }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}

.project-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.logo-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #fff;
  flex-shrink: 0;
  padding: 6px;
}

.logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.project-title {
  font-size: 1.02rem;
}

.skills {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--accent);
  margin-bottom: 12px;
}

.description {
  color: var(--text-muted);
  font-size: 0.92rem;
  margin-bottom: 12px;
}

.responsibilities {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.meta {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}
</style>
