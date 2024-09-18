<script setup lang="ts">
const props = defineProps({
  date: String,
  title: String,
  text: String,
});
</script>

<template>
  <div class="card max-w-56 min-h-64 bg-base-200 p-4 self-center">
    <h1 class="mb-1 text-2xl font-bold">{{ props.date }}</h1>
    <h2 class="mb-3 text-xl font-bold">{{ props.title }}</h2>
    <p>{{ props.text }}</p>
  </div>
</template>
