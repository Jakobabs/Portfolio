<script setup lang="ts">
import BlogHeader from "../../components/BlogHeader.vue";
</script>

<template>
  <BlogHeader
    :title="'Squirrel Be Gone'"
    :author="'Jacob Kelly'"
    :date="'January 11, 2025'"
    :tags="['Computer Vision', 'AI', 'Team']"
    :title_src="'/squirrel-detect.png'"
    :author_src="'/jacobkelly_head.png'"
  />
  <div class="flex justify-center">
    <div class="flex flex-col px-10 md:px-28 py-8 max-w-sm md:max-w-7xl">
      <div>
        <h1 class="text-3xl font-bold py-4 font-serif">About</h1>
        <p class="indent-8 text-lg leading-relaxed">
          Squirrel Be Gone is a computer vision powered airsoft turret. The goal
          of the project was to design an effective way to deter rodents from
          gardens. This project was made in a team of 4; Caleb Johnson, Jacob
          Kelly (me), Austin Martinez, and J.T. Puszczewicz, at Eastern Michigan
          University (EMU) for the Senior Capstone project. I was elected team
          leader. All materials used were either provided by EMU or purchased
          for this project by EMU. We decided to use an airsoft gun as it shoots
          a harmless BB without causing additional disturbance. Other methods
          use sound or sprays, but both have their issues. Certain sprays are
          harmful to vegetation, and sound based solutions affect pets as well.
        </p>
        <p class="indent-8 text-lg leading-relaxed">
          This allowed our solution to properly deter rodents, without
          disrupting people, plants, or pets. You can check out our report
          <a
            href="https://drive.google.com/file/d/1MkaKR6OZF1ZoXnXZ6zNatpyM_42sNngO/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-primary"
            >here</a
          >.
        </p>
      </div>
      <div class="divider" />
      <div>
        <h2 class="text-3xl font-bold py-4 font-serif">Technical Details</h2>
        <p class="indent-8 text-lg leading-relaxed">
          The AI turret used a Nvidia Jetson Nano, an airsoft gun, two servo
          motors, and 3D printed parts. Below is the prototype build. Overall
          the prototype was a success, targeting our dummy rodents and not
          pets/people. We identified a few improvements that can be made to make
          the product better. First swapping the servo motors with high quality
          stepper motors would increase our move speed and accuracy. Second, the
          Jetson Nano was discontinued by Nvidia in 2018, and we ran into
          countless software incompatibilities. Swapping to a newer SBC would
          make development easier and improve the number of frames analyzed by
          the model. Third, designing our own integrated airsoft gun would
          reduce the size and weight of the product, also making movement more
          accurate. The reduced weight would allow us to use more optimal motor
          placement. Lastly waterproofing the design is a must for a garden
          product, something that was not possible with the 3D printed parts
          used.
        </p>
        <div class="flex flex-col justify-center items-center gap-6 py-6">
          <div class="flex flex-col">
            <img class="max-w-xs md:max-w-xl" :src="'/squirrel-turret.png'" />
            <p class="text-center italic p-2">Prototype Build</p>
          </div>
          <div class="flex flex-col">
            <iframe
              width="640"
              height="480"
              src="https://drive.google.com/file/d/1uMvMhtq2KSb0WBgAtDzsoQAQDSTUdE4Y/preview"
            ></iframe>
            <a
              href="https://drive.google.com/file/d/1uMvMhtq2KSb0WBgAtDzsoQAQDSTUdE4Y/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              class="link link-primary text-center italic p-2"
              >Demo Video
            </a>
          </div>
        </div>
      </div>
      <div class="divider" />
    </div>
  </div>
</template>
