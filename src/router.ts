import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import theseus from './pages/subProjects/theseus.vue'
import ResumePage from './pages/ResumePage.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage },
  { path: '/resume', component: ResumePage },
  { path: '/projects', component: ProjectsPage },
  { path: '/projects/theseus', component: theseus },
  { path: '/:pathMatch(.*)', redirect: '/home' }
]

const router = createRouter({
  scrollBehavior() {
    return { top: 0 }
  },
  history: createWebHistory(),
  routes,
})

export default router