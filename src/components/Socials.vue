<script setup lang="ts">
const props = defineProps({
  bg: String,
  gap: String,
});
</script>

<template>
  <div :class="props.gap" class="flex flex-row">
    <a
      :class="props.bg"
      class="btn btn-circle btn-ghost"
      href="https://github.com/Jakobabs"
      target="_blank"
      rel="noopener noreferrer"
      ><img
        src="https://ssl.gstatic.com/atari/images/sociallinks/github_black_36dp.png"
        alt="GitHub"
        class="lEB4Hf"
        style="width: 36px; height: 36px"
        width="36"
        height="36"
    /></a>
    <a
      :class="props.bg"
      class="btn btn-circle btn-ghost"
      href="https://linkedin.com/in/jacob-kelly-702703268/"
      target="_blank"
      rel="noopener noreferrer"
      ><img
        src="https://ssl.gstatic.com/atari/images/sociallinks/linkedin_black_36dp.png"
        alt="LinkedIn"
        class="lEB4Hf"
        style="width: 36px; height: 36px"
        width="36"
        height="36"
    /></a>
  </div>
</template>
