<script setup lang="ts">
import Header from "../components/Header.vue";
import ProjectCard from "../components/ProjectCard.vue";
</script>

<template>
  <Header :title="'Projects'" />
  <div class="hero py-24 bg-base-200">
    <div class="hero-content flex-col">
      <p class="text-xl font-medium text-center">
        Below are some of the projects that I am most proud of. They range from
        open-source contributions, to personal or school projects. All work is
        either my own, or done in a team, with the other members credited to
        that project.
      </p>
    </div>
  </div>
  <div
    class="flex flex-row flex-wrap justify-center content-center gap-6 py-14"
  >
    <ProjectCard
      :badge="1"
      :title="'Theseus'"
      :path="'theseus'"
      :text="'A game launcher which can be used as a CLI, GUI, and a library for creating and playing Modrinth projects.'"
      :tags="['Full Stack', 'Contributor']"
      :src="'https://cdn-raw.modrinth.com/app-landing/app-screenshot.webp'"
    />
    <ProjectCard
      :badge="2"
      :title="'Battery Replacer'"
      :text="'Replaces AA/AAA batteries with a recharegable lithium-ion battery with wireless charging support.'"
      :tags="['Circuit', 'PCB Design', 'Solo']"
    />
    <ProjectCard
      :badge="2"
      :title="'Squirrel Be Gone'"
      :text="'Smart Turrent that deters rodents using AI. Designed to protect gardens and prevent targeting humans or pets.'"
      :tags="['Computer Vision', 'AI', 'Team']"
    />
  </div>
</template>
