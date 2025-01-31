<script setup lang="ts">
import NavBar from './components/Nav-bar.vue'
import HeroSection from './components/Hero-section.vue'
import HomeCards from './components/Home-cards.vue'
import JobListing from './components/Job-listing.vue'
</script>

<template>
  <NavBar></NavBar>
  <HeroSection
    title="In Search Of Job?"
    sub_title="We got your back. We are actively working towards providing you the best job that suits your interest and career. From resume building to interview practice, we've got you covered from all corners"
  ></HeroSection>
  <HomeCards></HomeCards>
  <JobListing></JobListing>
</template>
