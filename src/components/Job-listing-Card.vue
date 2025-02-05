<script lang="ts" setup>
import { defineProps, ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { Job_Listing } from '../../job-types'

const props = defineProps<{
  job: Job_Listing
}>()

const showFullDescription = ref(false)

const truncatedDescription = computed(() => {
  let description = props.job.description
  if (!showFullDescription.value) {
    description = description.substring(0, 90) + '...'
  }
  return description
})

function toggle_show_description() {
  showFullDescription.value = !showFullDescription.value
}
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ job.type }}</div>
        <h3 class="text-xl font-bold">{{ job.title }}</h3>
      </div>

      <div class="space-y-4 mb-5">
        <div>
          {{ truncatedDescription }}
        </div>
        <div>
          <button @click="toggle_show_description" class="text-green-500 hover:text-green-600">
            {{ showFullDescription ? 'Less' : 'More' }}
          </button>
        </div>
      </div>

      <h3 class="text-green-500 mb-2">{{ job.salary }}</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="pi pi-map-marker"></i>
          {{ job.location }}
        </div>
        <RouterLink
          :to="'/jobs/' + job.id"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
