<script setup lang="ts">
import { useRouter } from "vue-router";
import { isMobile } from "../helpers/vars.ts";

const router = useRouter();
</script>

<template>
  <div class="navbar" :class="{ mobile: isMobile }">
    <div class="buttons">
      <button
        class="nav-btn"
        :class="{ selected: $route.path == '/about' }"
        @click="router.push('/about')"
      >
        About
      </button>
      <button
        class="nav-btn"
        :class="{ selected: $route.path == '/resume' }"
        @click="router.push('/resume')"
      >
        Resume
      </button>
      <button
        class="nav-btn"
        :class="{ selected: $route.path == '/projects' }"
        @click="router.push('/projects')"
      >
        Projects
      </button>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  flex: none;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 14rem);
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-width: 0px;
  border-bottom-width: 2px;
  border-color: var(--neutral);
}
.mobile {
  padding-top: 0rem !important;
}

.buttons {
  padding: 0.375rem;
  border-width: 2px;
  border-radius: 2rem;
  border-color: var(--base-content);

  .nav-btn {
    padding: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 1rem;
    transition: all 0.25s ease-in-out;
  }

  .selected {
    background-color: var(--primary);
    color: var(--accent-content);
  }
}
</style>
