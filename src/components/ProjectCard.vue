<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
  src: String,
  path: String,
  title: String,
  text: String,
  badge: Number,
  tags: Array<String>,
})
const router = useRouter();

const navigate = () => {
  if (props.path) router.replace('/projects/' + props.path)
}
</script>

<template>
  <div @click="navigate" class="card w-96 h-30r bg-base-300 shadow-xl cursor-pointer" >
    <figure class="w-96 h-68"><img class="self-start" :src="props.src" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ props.title }}
        <div v-if="props.badge == 1" class="badge badge-primary">NEW</div>
        <div v-if="props.badge == 2" class="badge badge-warning">Under Construction</div>
      </h2>
      <p>{{ props.text }}</p>
      <div class="card-actions justify-end">
        <div v-for="tag in props.tags" class="badge badge-outline badge-accent">{{ tag }}</div>
      </div>
    </div>
  </div>
</template>