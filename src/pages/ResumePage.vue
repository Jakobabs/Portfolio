<script setup lang="ts">
import Header from '../components/Header.vue'
</script>

<template>
  <Header :title="'Resume'" />
  <div class="hero justify-center my-6 hidden lg:hero">
    <object class="pdf" width="850" height="1125" data="/public/resume.pdf" />
  </div>
  <div class="hero py-24 bg-base-200 lg:hidden">
    <div class="hero-content flex-col">
      <p class="text-xl font-medium text-center">You are either on mobile or your screen is way too small! You can check it out here:
        <br><a class="link" href="https://docs.google.com/document/d/1Rk0e9NRgYgwPOp6_VzqJkpX2S7GPBteyFywuFPsclsA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          https://docs.google.com/
        </a>
      </p>
    </div>
  </div>
</template>