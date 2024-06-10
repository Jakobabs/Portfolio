<script setup lang="ts">
const props = defineProps({
  icon: String,
  title: String,
  text: String,
  bg: String
})
</script>

<template>
<div :class="props.bg" class="card max-w-56 p-4 self-strech">
  <span class="mb-5 material-symbols-outlined scale-200 text-left px-12">{{ props.icon }}</span>
  <h2 class="mb-3 text-xl font-bold">{{ props.title }}</h2>
  <p>{{ props.text}}</p>
</div>
</template>