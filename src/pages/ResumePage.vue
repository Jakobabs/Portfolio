<script setup lang="ts">
import Header from '../components/Header.vue'
</script>

<template>
  <Header :title="'Resume'" />
  <div class="hero justify-center my-6">
    <object class="pdf" width="850" height="1125" data="/src/assets/resume.pdf" />
  </div>
</template>