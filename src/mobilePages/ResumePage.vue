<script setup lang="ts">
const open = (path: string) => {
  window.open(path);
};
</script>

<template>
  <div class="message">
    <button
      @click="open('https://jacobkelly.dev/resume.pdf')"
      class="btn btn-info"
    >
      Download Resume
    </button>
  </div>
</template>

<style scoped>
.message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 6rem;
}
</style>
