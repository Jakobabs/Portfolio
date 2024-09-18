<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const width = ref(850);
const height = ref(1125);

const rem = (rem: number) => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

const resized = () => {
  const view = document.getElementsByClassName("view")[0];
  const w = view.clientWidth - rem(14);
  const h = view.clientHeight - rem(13);

  const hr = (w * 1125) / 850;
  const wr = (h * 850) / 1125;

  if (hr > h) {
    if (h > 1125) {
      height.value = 1125;
      width.value = 850;
    } else {
      height.value = h;
      width.value = wr;
    }
  } else {
    if (w > 850) {
      height.value = 1125;
      width.value = 850;
    } else {
      height.value = hr;
      width.value = w;
    }
  }
};

const open = (path: string) => {
  window.open(path);
};

onMounted(() => {
  window.addEventListener("resize", resized);
  resized();
});
onUnmounted(() => window.removeEventListener("resize", resized));
</script>

<template>
  <object
    v-if="height >= 465 && width >= 351"
    class="pdf"
    :width="width"
    :height="height"
    data="/resume.pdf"
  />
  <div v-else class="message">
    <button
      @click="open('https://jacobkelly.dev/resume.pdf')"
      class="btn btn-info"
    >
      Download Resume
    </button>
  </div>
</template>

<style scoped>
.pdf {
  margin-top: 2rem;
  align-self: center;
}

.message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
</style>
