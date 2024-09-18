<script setup lang="ts">
import Socials from "../components/Socials.vue";
</script>

<template>
  <div class="profile">
    <img :src="'/jacobkelly_head.png'" />
    <h1>Jacob Kelly</h1>
    <p>Electrical & Computer Engineer</p>
    <Socials />
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    border-radius: 4rem;
    max-width: 10rem;
    margin: 1rem;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  }
}
</style>
