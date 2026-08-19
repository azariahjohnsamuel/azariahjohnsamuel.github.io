<script setup lang="ts">
import { profile } from '../data/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p>© {{ year }} {{ profile.displayName }}</p>
      <div class="links">
        <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        <a :href="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        <a :href="profile.github" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 32px 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  color: var(--text-muted);
  font-size: 0.85rem;
}

.links {
  display: flex;
  gap: 20px;
}
</style>
