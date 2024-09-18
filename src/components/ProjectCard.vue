<script setup lang="ts">
import { useRouter } from "vue-router";

const props = defineProps({
  src: String,
  path: String,
  title: String,
  text: String,
  badge: Number,
  tags: Array<String>,
});
const router = useRouter();

const navigate = () => {
  if (props.path) router.push("/projects/" + props.path);
};
</script>

<template>
  <div
    @click="navigate"
    class="card w-80 h-28r bg-base-300 shadow-xl cursor-pointer"
  >
    <figure class="w-80 h-60">
      <img v-if="props.src !== undefined" class="self-start" :src="props.src" />
      <div v-else class="skeleton w-80 h-60" />
    </figure>
    <div class="card-body pt-2">
      <h2 class="card-title">
        {{ props.title }}
        <div v-if="props.badge == 1" class="badge badge-primary">NEW</div>
        <div v-if="props.badge == 2" class="badge badge-warning">WIP</div>
      </h2>
      <p>{{ props.text }}</p>
      <div class="card-actions justify-end">
        <div v-for="tag in props.tags" class="badge badge-outline badge-accent">
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: transform 0.25s ease-in-out;
}
.card:hover {
  transform: scale(1.05);
}
</style>
