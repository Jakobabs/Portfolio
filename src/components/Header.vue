<script setup lang="ts">
const props = defineProps({
  title: String,
})
</script>

<template>
  <div class="hero min-h-96 min-w-screen" style="background-image: url(https://www.tessolve.com/wp-content/uploads/2022/06/ultimate-guide-pcb.jpg)">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div>
        <h1 class="mb-5 text-5xl font-bold">{{ props.title }}</h1>
      </div>
    </div>
  </div>
</template>