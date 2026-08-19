<script setup lang="ts">
import { profile } from '../data/portfolio'

const links = [
  { href: '#top', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
]
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <a href="#top" class="brand">{{ profile.displayName }}</a>
      <nav class="links">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(11, 15, 23, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.brand {
  font-weight: 700;
  color: var(--text);
  font-size: 1rem;
}

.brand:hover {
  text-decoration: none;
  color: var(--accent);
}

.links {
  display: flex;
  gap: 28px;
}

.links a {
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 500;
}

.links a:hover {
  color: var(--accent);
  text-decoration: none;
}

@media (max-width: 640px) {
  .links {
    gap: 16px;
  }
  .links a {
    font-size: 0.8rem;
  }
}
</style>
