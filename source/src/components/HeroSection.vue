<script setup lang="ts">
import { profile } from '../data/portfolio'
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero-inner">
      <img class="avatar" src="/assets/profile-pic.png" :alt="profile.displayName" />
      <span class="section-label">Portfolio</span>
      <h1 class="name">{{ profile.displayName }}</h1>
      <p class="title">{{ profile.title }} — {{ profile.tagline }}</p>
      <p class="summary">{{ profile.summary }}</p>
      <div class="actions">
        <a class="btn btn-primary" :href="profile.resumeUrl" target="_blank" rel="noopener">Download Résumé</a>
        <a class="btn btn-ghost" :href="`mailto:${profile.email}`">Email Me</a>
        <a class="btn btn-ghost" :href="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        <a class="btn btn-ghost" :href="profile.github" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 72px 0 88px;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border);
  margin-bottom: 24px;
}

.name {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 8px;
}

.title {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 1rem;
  margin-bottom: 24px;
}

.summary {
  max-width: 720px;
  color: var(--text-muted);
  font-size: 1.05rem;
  margin-bottom: 32px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
