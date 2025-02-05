<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
// import jobData from '../../jobs-data.json'
import JobListingCard from './Job-listing-Card.vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'
import type { Job_Listing } from '../../job-types'

const state = reactive({
  jobs: <Job_Listing[]>[],
  isLoading: true,
})

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
})

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/jobs/')
    state.jobs = response.data

    console.log(state.jobs)
  } catch (error) {
    console.log(error)
  } finally {
    state.isLoading = true
  }
})
</script>

<template>
  <PulseLoader :color="'blue'"></PulseLoader>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>

      <div
        v-if="state.isLoading == true"
        class="w-full animate-pulse h-[10px] rounded-2xl bg-gray-100"
      ></div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Job Listings -->
        <JobListingCard
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        ></JobListingCard>
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
