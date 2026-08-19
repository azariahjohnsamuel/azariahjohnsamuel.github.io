<script setup lang="ts">
import AppNav from './components/AppNav.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import CursorGlow from './components/CursorGlow.vue'
import CursorSparkles from './components/CursorSparkles.vue'
import Starfield from './components/Starfield.vue'
import BackToTop from './components/BackToTop.vue'
import HeroSection from './components/HeroSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import EducationSection from './components/EducationSection.vue'
import AppFooter from './components/AppFooter.vue'
import { useGlobalParallax } from './composables/useGlobalParallax'

useGlobalParallax()
</script>

<template>
  <Starfield />
  <ScrollProgress />
  <CursorGlow />
  <CursorSparkles />
  <AppNav />
  <main>
    <HeroSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <EducationSection />
  </main>
  <AppFooter />
  <BackToTop />
</template>
