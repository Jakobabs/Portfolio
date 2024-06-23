import { createWebHistory, createRouter } from 'vue-router'

const HomePage = () => import('./pages/HomePage.vue')
const ProjectsPage = () => import('./pages/ProjectsPage.vue')
const theseus = () => import('./pages/subProjects/theseus.vue')
const ResumePage = () => import('./pages/ResumePage.vue')

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage },
  { path: '/resume', component: ResumePage },
  { path: '/projects', component: ProjectsPage },
  { path: '/projects/theseus', component: theseus },
  { path: '/:pathMatch(.*)', redirect: '/home' }
]

const router = createRouter({
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  history: createWebHistory(),
  routes,
})

export default router