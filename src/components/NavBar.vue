<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const scroll = useWindowScroll();
const router = useRouter();
const hoverNav = ref(false);
const hoverDrop = ref(false);
const showNav = computed(() => (scroll.y.value !== 0 || hoverNav.value))
const clickTime = ref(new Date)
const sidebar = ref(false)

// Clicking a sub menu for some reason also clicks the base menu after,
// fn adds a small lockout timer to prevent this
const updatePage = (path: string) => {
  let diff: number = (new Date().getTime()) - clickTime.value.getTime();
  if (diff > 10) {
    router.push(path);
    clickTime.value = new Date();
  }
  if (sidebar.value) sidebar.value = false
}
</script>

<template>
  <div class="navbar fixed top-0 items-start z-40" id="NavBar" @mouseenter="hoverNav = true" @mouseleave="hoverNav = false" :class="{'bg-base-300': showNav}">
    <div class="navbar-start">
      <a class="text-xl font-medium px-1 py-2">Jacob Kelly Portfolio</a>
    </div>
    <div class="navbar-end">
      <div class="hidden md:contents">
        <ul class="menu fixed top-0 menu-horizontal px-6 ">
          <li @click="updatePage('/home')"><a :class="{active: $route.fullPath == '/home' && showNav}">Home</a></li>
          <li @click="updatePage('/resume')"><a :class="{active: $route.fullPath == '/resume' && showNav}">Resume</a></li>
          <li @click="updatePage('/projects')" class="max-w-24"><span class="menu-dropdown-toggle min-w-24 max-w-24" @mouseenter="hoverDrop = true" @mouseleave="hoverDrop = false" :class="{'menu-dropdown-show': hoverDrop, active: $route.fullPath.startsWith('/projects') && showNav, 'cursor-pointer': $route.fullPath.startsWith('/projects/')}">Projects</span>
            <ul class="menu-dropdown p-2 bg-base-100 rounded-box max-w-24" :class="{'menu-dropdown-show': hoverDrop}" @mouseenter="hoverDrop = true" @mouseleave="hoverDrop = false">
              <li @click="updatePage('/projects/theseus')"><a :class="{active: $route.fullPath == '/projects/theseus' && showNav}">Theseus</a></li>
              <li @click="updatePage('/projects/brp')"><a :class="{active: $route.fullPath == '/projects/brp' && showNav}">BRP</a></li>
              <li @click="updatePage('/projects/unraid')"><a :class="{active: $route.fullPath == '/projects/unraid' && showNav}">Unraid</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="contents md:hidden">
          <label for="drawer" class="drawer-button btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div>
    </div>
  </div>
  <div class="drawer drawer-end z-50">
  <input v-model="sidebar" id="drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-side">
    <label for="drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <li @click="updatePage('/home')"><a :class="{active: $route.fullPath == '/home' && showNav}">Home</a></li>
          <li @click="updatePage('/resume')"><a :class="{active: $route.fullPath == '/resume' && showNav}">Resume</a></li>
          <li @click="updatePage('/projects')" class="max-w-24"><span class="menu-dropdown-toggle min-w-24 max-w-24" @mouseenter="hoverDrop = true" @mouseleave="hoverDrop = false" :class="{'menu-dropdown-show': hoverDrop, active: $route.fullPath.startsWith('/projects') && showNav, 'cursor-pointer': $route.fullPath.startsWith('/projects/')}">Projects</span>
            <ul class="menu-dropdown p-2 bg-base-100 rounded-box max-w-24" :class="{'menu-dropdown-show': hoverDrop}" @mouseenter="hoverDrop = true" @mouseleave="hoverDrop = false">
              <li @click="updatePage('/projects/theseus')"><a :class="{active: $route.fullPath == '/projects/theseus' && showNav}">Theseus</a></li>
              <li @click="updatePage('/projects/brp')"><a :class="{active: $route.fullPath == '/projects/brp' && showNav}">BRP</a></li>
              <li @click="updatePage('/projects/unraid')"><a :class="{active: $route.fullPath == '/projects/unraid' && showNav}">Unraid</a></li>
            </ul>
          </li>
    </ul>
  </div>
</div>
</template>