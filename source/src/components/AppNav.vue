<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { profile } from '../data/portfolio'
import { useScrollSpy } from '../composables/useScrollSpy'

const links = [
  { href: '#top', id: 'top', label: 'About' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#education', id: 'education', label: 'Education' },
]

const { activeId } = useScrollSpy(links.map((l) => l.id))

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 8
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav" :class="{ scrolled }">
    <div class="container nav-inner">
      <a href="#top" class="brand">{{ profile.displayName }}</a>
      <nav class="links">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          :class="{ active: activeId === link.id }"
          >{{ link.label }}</a
        >
      </nav>
      <button
        class="menu-toggle"
        :class="{ open: menuOpen }"
        aria-label="Toggle navigation menu"
        @click="menuOpen = !menuOpen"
      >
        <span />
        <span />
        <span />
      </button>
    </div>
    <Transition name="drop">
      <nav v-if="menuOpen" class="mobile-links">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          :class="{ active: activeId === link.id }"
          @click="closeMenu"
          >{{ link.label }}</a
        >
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(11, 15, 23, 0.75);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.nav.scrolled {
  border-color: var(--border);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
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
  position: relative;
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  padding-bottom: 4px;
}

.links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.links a:hover {
  color: var(--text);
  text-decoration: none;
}

.links a:hover::after {
  transform: scaleX(1);
}

.links a.active {
  color: var(--accent);
}

.links a.active::after {
  transform: scaleX(1);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--text);
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.menu-toggle.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.menu-toggle.open span:nth-child(2) {
  opacity: 0;
}
.menu-toggle.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.mobile-links {
  display: none;
}

.drop-enter-active,
.drop-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 720px) {
  .links {
    display: none;
  }
  .menu-toggle {
    display: flex;
  }
  .mobile-links {
    display: flex;
    flex-direction: column;
    padding: 8px 24px 20px;
    border-top: 1px solid var(--border);
    gap: 4px;
  }
  .mobile-links a {
    padding: 10px 0;
    color: var(--text-muted);
    font-size: 0.95rem;
  }
  .mobile-links a.active {
    color: var(--accent);
  }
}
</style>
