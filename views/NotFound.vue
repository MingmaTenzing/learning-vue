<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex justify-center items-center h-[60vh]">
    <section class="text-center flex flex-col justify-center w-full items-center h-96">
      <i class="pi pi-exclamation-triangle text-yellow-400 text-6xl mb-4"></i>
      <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <RouterLink
        to="/"
        href="index.html"
        class="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2 mt-4"
        >Go Back</RouterLink
      >
    </section>
  </div>
</template>
