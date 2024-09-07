import { createWebHistory, createRouter } from 'vue-router'

const HomePage = () => import('./pages/HomePage.vue')
const ProjectsPage = () => import('./pages/ProjectsPage.vue')
const Theseus = () => import('./pages/subProjects/Theseus.vue')
const BatteryReplacer = () => import('./pages/subProjects/BatteryReplacer.vue')
const ResumePage = () => import('./pages/ResumePage.vue')

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage },
  { path: '/resume', component: ResumePage },
  { path: '/projects', component: ProjectsPage },
  { path: '/projects/theseus', component: Theseus },
  { path: '/projects/battery-replacer', component: BatteryReplacer },
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