<script setup lang="ts">
const props = defineProps({
  title: String,
  title_src: String,
  author: String,
  author_src: String,
  date: String,
  tags: Array<String>,
});
</script>

<template>
  <div class="hero bg-base-200">
    <div class="hero-content py-16">
      <div class="space-y-4">
        <h1 class="text-center text-6xl font-bold font-mono py-8">
          {{ props.title }}
        </h1>
        <img
          class="max-w-screen md:max-w-2xl rounded-lg"
          :src="props.title_src"
        />
        <div class="flex flex-col md:flex-row justify-between gap-6">
          <div class="flex flex-row gap-3">
            <div class="avatar size-18">
              <div class="rounded-full">
                <img :src="props.author_src" />
              </div>
            </div>
            <div class="flex flex-col content-center gap-4 text-lg">
              <h1>Written by {{ props.author }}</h1>
              <p>{{ props.date }}</p>
            </div>
          </div>
          <div class="card-actions pt-6 md:pt-1">
            <div
              v-for="tag in props.tags"
              class="badge badge-outline badge-accent"
            >
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
