<script setup lang="ts">
import { profile } from '../data/portfolio'
import TypewriterText from './TypewriterText.vue'
import PlanetAvatar from './PlanetAvatar.vue'
import HeroHud from './HeroHud.vue'

const phrases = [
  'Vue 3 & TypeScript',
  'ASP.NET Core & GraphQL',
  'Keycloak & Microsoft Entra ID',
  'Industrial Automation Systems',
]
</script>

<template>
  <section id="top" class="hero">
    <div class="orb orb-a" aria-hidden="true" />
    <div class="orb orb-b" aria-hidden="true" />
    <div class="grid-overlay" aria-hidden="true" />
    <HeroHud />
    <div class="container hero-inner">
      <PlanetAvatar />
      <span class="section-label" v-reveal>Portfolio</span>
      <h1 class="name" v-reveal="80">{{ profile.displayName }}</h1>
      <p class="title" v-reveal="140">{{ profile.title }} — {{ profile.tagline }}</p>
      <p class="typewriter-line" v-reveal="180">
        <span class="prompt">&gt;</span>
        <TypewriterText :phrases="phrases" />
      </p>
      <p class="summary reveal-dim" v-reveal="220">{{ profile.summary }}</p>
      <div class="actions" v-reveal="260">
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
  position: relative;
  padding: 72px 0 88px;
  overflow: hidden;
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.35;
  pointer-events: none;
  animation: float 14s ease-in-out infinite;
}

.orb-a {
  width: 340px;
  height: 340px;
  top: -120px;
  right: -60px;
  background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
}

.orb-b {
  width: 280px;
  height: 280px;
  bottom: -140px;
  left: 10%;
  background: radial-gradient(circle, var(--accent-violet) 0%, transparent 70%);
  animation-delay: -7s;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 60% 60% at 30% 20%, #000 0%, transparent 75%);
  opacity: 0.35;
  pointer-events: none;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-20px, 24px) scale(1.06);
  }
}

.name {
  font-size: clamp(2.6rem, 7.5vw, 4.6rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.02;
  margin-bottom: 12px;
  background: linear-gradient(120deg, var(--text) 30%, var(--accent) 70%, var(--accent-blue));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.summary.reveal-dim {
  transition: opacity 0.8s var(--ease), transform 0.8s var(--ease), color 0.8s var(--ease);
  color: #4b5568;
}

.summary.reveal-dim.is-visible {
  color: var(--text-muted);
}

.title {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 1rem;
  margin-bottom: 14px;
}

.typewriter-line {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 1.4em;
  margin-bottom: 24px;
  font-size: 0.95rem;
}

.prompt {
  color: var(--accent-violet);
  font-family: var(--font-mono);
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

@media (prefers-reduced-motion: reduce) {
  .orb {
    animation: none;
  }
}
</style>
