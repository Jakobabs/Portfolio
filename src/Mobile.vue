<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Profile from "./components/Profile.vue";
import MailIcon from "./assets/MailIcon.vue";
import PhoneIcon from "./assets/PhoneIcon.vue";
</script>

<template>
  <div class="body">
    <Profile />
    <div class="row">
      <div class="contact">
        <MailIcon />
        jkelly58@emich.edu
      </div>
      <div class="contact">
        <PhoneIcon />
        (734)-730-5693
      </div>
    </div>
    <NavBar />
    <RouterView name="Mobile" />
  </div>
</template>

<style scoped>
.body {
  width: calc (100vw - 4rem);
  margin-right: 2rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  gap: 3rem;
  overflow-x: hidden;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  svg {
    width: 2.5rem;
  }
}
</style>
