<script setup lang="ts">
import Profile from "./components/Profile.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="body">
    <div class="sidebar">
      <Profile />
      <div class="section">
        <p class="header">Email:</p>
        <p>jkelly58@emich.edu</p>
      </div>
      <div class="section">
        <p class="header">Phone:</p>
        <p>(734)-730-5693</p>
      </div>
      <div class="footer">
        <a
          class="avatar size-16 cursor-pointer"
          href="https://www.credly.com/badges/986ee904-ad02-423e-a217-c6569475a59f/public_url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="fe">
            <img src="/fe-exam.png" />
          </div>
        </a>
      </div>
    </div>
    <div class="view">
      <NavBar />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.body {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.sidebar {
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 100vh;
  width: 14rem;
  padding: 1rem;
  background-color: var(--base-300);
  gap: 2rem;

  .section {
    margin-left: 0.75rem;

    .header {
      font-size: 1.125rem;
      line-height: 1.75rem;
      font-weight: 700;
    }
  }

  .footer {
    margin-top: auto;
  }
}

.view {
  width: calc(100vw - 14rem);
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.fe {
  border-radius: 0.25rem;
  transition: transform 0.25s ease-in-out;
}
.fe:hover {
  transform: scale(1.1);
}
</style>
