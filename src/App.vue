<script setup lang="ts">
import { defineAsyncComponent, onMounted, onUnmounted } from "vue";
import { isMobile } from "./helpers/vars.ts";

const Desktop = defineAsyncComponent(() => import("./Desktop.vue"));
const Mobile = defineAsyncComponent(() => import("./Mobile.vue"));

const resized = () => {
  isMobile.value = document.documentElement.clientWidth <= 760;
};

onMounted(() => {
  window.addEventListener("resize", resized);
  resized();
});
onUnmounted(() => window.removeEventListener("resize", resized));
</script>

<template>
  <component :is="isMobile ? Mobile : Desktop" />
</template>
