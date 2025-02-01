<script lang="ts" setup>
import HeroSection from '@/components/Hero-section.vue'
import HomeCards from '@/components/Home-cards.vue'
import JobListing from '@/components/Job-listing.vue'
</script>

<template>
  <HeroSection
    title="In Search Of Job?"
    sub_title="We got your back. We are actively working towards providing you the best job that suits your interest and career. From resume building to interview practice, we've got you covered from all corners"
  ></HeroSection>
  <HomeCards></HomeCards>
  <JobListing :limit="3" :show-button="false"></JobListing>
</template>
