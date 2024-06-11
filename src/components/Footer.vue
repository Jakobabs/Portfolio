<script setup lang="ts">
  import { useWindowScroll } from '@vueuse/core';
import Socials from './Socials.vue';
  
  const scroll = useWindowScroll({ behavior: 'smooth' });
</script>
<template>
  <footer class="footer footer-center p-10 bg-accent text-primary-content">
  <aside>
    <div class="tooltip" data-tip="To top">
      <button @click="scroll.y.value = 0" class="btn btn-ghost btn-circle"><span class="material-symbols-outlined scale-175 text-black">keyboard_arrow_up</span></button>
    </div>
    <p class="font-bold">
      Jacob Kelly <br>
      <a class="link" href="https://github.com/Jakobabs/portfolio" target="_blank" rel="noopener noreferrer">
      Check out the source on my Github!
      </a>
    </p> 
    <p>Copyright © 2024 - All right reserved</p>
    <Socials class="mt-2" />
  </aside>
</footer>
</template>