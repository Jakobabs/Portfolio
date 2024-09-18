<script setup lang="ts">
import ExperienceCard from "../components/ExperienceCard.vue";
import Skillcard from "../components/SkillCard.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="flex flex-col justify-center content-center gap-6 p-8">
    <div class="max-w-80 self-center">
      <h1 class="mb-8 text-4xl font-bold">Eastern Michigan University</h1>
      <p class="mb-3">
        Currently pursuing a Bachelor of Science in Electrical and Computer
        Engineering. My expected graduation date is December 2024.
      </p>
      <p>
        Relevant coursework includes: Circuit Analysis, Controls Systems, Power
        Electronics.
      </p>
    </div>
    <ExperienceCard
      :date="'2024'"
      :title="'Senior Capstone Leader'"
      :text="'Led a team to create a viable product. Generated progress reports and met deadlines. See \'Squirrel Be Gone\' project'"
    />
    <ExperienceCard
      :date="'2023 - Present'"
      :title="'EMU IEE Club Member'"
      :text="'University club focused on engineering topics and principles. Worked on group projects.'"
    />
  </div>
  <div class="hero">
    <div class="hero-content flex-col">
      <h1 class="mb-8 text-4xl font-bold text-center">
        Key skills and experience
      </h1>
      <p class="mb-3 text-xl font-medium text-center">
        I started learning programming in 2016. Since then I have learned many
        languages, including: Rust, Embedded C, Python, HTML, JavaScript, CSS,
        and Java. In University I learned about inductors, capacitors,
        transistors, and amplifiers. I am very knowledgeable in both electrical
        and computer engineering.
      </p>
    </div>
  </div>
  <div
    class="flex flex-col lg:flex-row justify-center content-center gap-6 p-8"
  >
    <Skillcard
      :icon="'data_object'"
      :title="'Developer'"
      :text="'I have experience in Arduino, ESP-IDF, Tauri, Vue, Vite, and more.'"
    />
    <Skillcard
      :icon="'memory'"
      :title="'Hardware design'"
      :text="'Using Kicad and Flux.ai, I have designed PCBs for RF, power, microcontrollers, and other use cases.'"
    />
    <Skillcard
      :icon="'dns'"
      :title="'Networking'"
      :text="'I host my own Unraid server with: Nextcloud, Authentik, HASS, and RDP.'"
    />
    <Skillcard
      :icon="'neurology'"
      :title="'AI'"
      :text="'Experience with Object Detection models using ML and DNNs.'"
    />
  </div>
  <div class="hero px-6 py-8 justify-center">
    <div class="hero-content flex-col lg:flex-row">
      <img
        src="/jacobkelly.png"
        class="w-56 md:w-96 rounded-lg shadow-2xl self-start"
      />
      <div class="px-6">
        <h1 class="text-3xl font-bold max-w-80">
          Jacob Kelly: Electrical & Computer Engineer
        </h1>
        <p class="py-6 max-w-96">
          Personally, engineering is not just a career, it's my hobby. I greatly
          enjoy solving problems and learning new skills to do so. I have
          completed many personal projects regarding smart home, robotics,
          electronics, and computer systems. You can look at a few of them
          <a @click="router.push('/projects')" class="link link-primary">here</a
          >. I am FE certified, you can click the badge below for more details.
        </p>
        <h2 class="text-xl font-medium max-w-80">Design tools</h2>
        <p class="py-6 max-w-96">
          Using Kicad I have created multiple PCBs for my embedded projects
          along with Autodesk Fusion 360 for CAD and 3D Printing
        </p>
        <h2 class="text-xl font-medium max-w-80">Development skills</h2>
        <p class="py-6 max-w-96">
          I contributed to a Web App using Tauri and Vue.js. The backend handled
          data manipulation and concurrent http requests. I also wrote this
          entire website!
        </p>
        <div class="flex flex-wrap justify-start md:justify-end gap-3">
          <div class="avatar size-16">
            <div class="rounded">
              <img
                src="https://cdn.icon-icons.com/icons2/2415/PNG/512/html_plain_wordmark_logo_icon_146476.png"
              />
            </div>
          </div>
          <div class="avatar size-16">
            <div class="rounded">
              <img
                src="https://cdn.icon-icons.com/icons2/2415/PNG/512/css_plain_wordmark_logo_icon_146574.png"
              />
            </div>
          </div>

          <div class="avatar size-16">
            <div class="rounded">
              <img
                src="https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png"
              />
            </div>
          </div>
          <div class="avatar size-16">
            <div class="rounded">
              <img
                src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_python_icon_130221.png"
              />
            </div>
          </div>
          <div class="avatar size-16">
            <div class="rounded">
              <img
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/rust_lang_logo_icon_169776.png"
              />
            </div>
          </div>
          <a
            class="avatar size-16 cursor-pointer"
            href="https://www.credly.com/badges/986ee904-ad02-423e-a217-c6569475a59f/public_url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="rounded">
              <img src="/fe-exam.png" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
