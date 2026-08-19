<script setup lang="ts">
import AppNav from './components/AppNav.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import CursorGlow from './components/CursorGlow.vue'
import BackToTop from './components/BackToTop.vue'
import HeroSection from './components/HeroSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import EducationSection from './components/EducationSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <ScrollProgress />
  <CursorGlow />
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
