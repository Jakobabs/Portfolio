<template>
  <div v-if="shown">
    <div
      :class="{
        shown: actuallyShown,
      }"
      class="modal-overlay"
      @click="() => (closable ? hide() : {})"
    />
    <div class="modal-container" :class="{ shown: actuallyShown }">
      <div class="modal-body" :class="{ mobile: isMobile }">
        <div class="modal-header">
          <h1>{{ header }}</h1>
          <button class="modal-close" @click="hide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="modal-content"><component :is="dynamicComponent" /></div>
      </div>
    </div>
  </div>
  <div v-else></div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";
import { isMobile } from "../helpers/vars.ts";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  header: {
    type: String,
    default: null,
  },
  closable: {
    type: Boolean,
    default: true,
  },
  onHide: {
    type: Function,
    default() {
      return () => {};
    },
  },
});

const shown = ref(false);
const actuallyShown = ref(false);

let dynamicComponent: any = null;

function show(path: string) {
  dynamicComponent = defineAsyncComponent(
    () => import(`../pages/subProjects/${path}.vue`)
  );
  shown.value = true;
  setTimeout(() => {
    actuallyShown.value = true;
  }, 50);
}

function hide() {
  router.push("/projects");
  props.onHide();
  actuallyShown.value = false;
  setTimeout(() => {
    shown.value = false;
  }, 300);
}

defineExpose({
  show,
  hide,
});
</script>

<style scoped>
.modal-close {
  display: inline-flex;
  padding: 0.375rem;
  border-radius: 1rem;
  transition: background-color 0.25s ease-in-out;

  svg {
    width: 30px;
    transition: transform 0.25s ease-in-out;
  }
}
.modal-close:hover {
  background-color: var(--neutral);

  svg {
    transform: scale(1.1);
  }
}
.modal-overlay {
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 19;
  transition: all 0.3s ease-in-out;

  @media (prefers-reduced-motion) {
    transition: none !important;
  }

  &.shown {
    opacity: 1;
    visibility: visible;
    background: hsla(0, 0%, 0%, 0.5);
    backdrop-filter: blur(3px);
  }
}

.modal-container {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 21;
  visibility: hidden;
  pointer-events: none;

  &.shown {
    visibility: visible;
    .modal-body {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 10vh;
    pointer-events: auto;

    .modal-header {
      display: flex;
      height: 4rem;
      width: 80vw;
      padding: 0.5rem;
      justify-content: space-between;
      align-items: center;
      background-color: var(--base-400);
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;

      h1 {
        padding-left: 1rem;
        font-weight: bold;
        font-size: 1.25rem;
      }
    }
    .modal-content {
      padding: 0.25rem;
      height: 80vh;
      width: 80vw;
      background-color: var(--base-200);
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      overflow-y: scroll;
    }

    transform: translateY(50vh);
    visibility: hidden;
    opacity: 0;
    transition: all 0.25s ease-in-out;

    @media (prefers-reduced-motion) {
      transition: none !important;
    }

    @media screen and (max-width: 650px) {
      width: calc(100% - 2 * var(--gap-lg));
    }
  }
  .mobile {
    top: 0 !important;

    .modal-header {
      width: 100vw !important;
    }
    .modal-content {
      width: 100vw !important;
      height: 100vh !important;
    }
  }
}
</style>
