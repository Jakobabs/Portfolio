<script setup lang="ts">
import { onMounted, ref } from "vue";
import ProjectCard from "../components/ProjectCard.vue";
import Modal from "../components/Modal.vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";

const router = useRouter();
const modal = ref();

const handleRoute = (route: any) => {
  if (route.params.project.length <= 0) return;
  modal.value.show(route.params.project);
};

onBeforeRouteUpdate((route) => handleRoute(route));

onMounted(() => handleRoute(router.currentRoute.value));
</script>

<template>
  <div class="hero pt-16">
    <div class="hero-content flex-col">
      <p class="text-xl font-medium text-center max-w-4xl">
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
      :title="'Squirrel Be Gone'"
      :text="'Smart Turret that deters rodents using AI. Designed to protect gardens and prevent targeting humans or pets.'"
      :tags="['Computer Vision', 'AI', 'Team']"
      :path="'squirrel-be-gone'"
      :src="'/squirrel-detect.png'"
    />
    <ProjectCard
      :badge="0"
      :title="'Battery Replacer'"
      :text="'Replaces AA/AAA batteries with a rechargeable lithium-ion battery with wireless charging support.'"
      :tags="['Circuit', 'PCB Design', 'Solo']"
      :path="'battery-replacer'"
      :src="'/battery-replacer-v1-pcb.png'"
    />
    <ProjectCard
      :badge="0"
      :title="'Theseus'"
      :text="'A game launcher which can be used as a CLI, GUI, and a library for creating and playing Modrinth projects.'"
      :tags="['Full Stack', 'Contributor']"
      :path="'theseus'"
      :src="'https://cdn-raw.modrinth.com/app-landing/app-screenshot.webp'"
    />
    <ProjectCard
      :badge="2"
      :title="'Audion'"
      :text="'Audio mixing and routing with hardware support. Designed for content creators who need more control over their audio.'"
      :tags="['Full Stack', 'Audio', 'Solo']"
    />
  </div>
  <Modal ref="modal" />
</template>
