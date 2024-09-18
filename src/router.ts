import { createWebHistory, createRouter } from 'vue-router'

const DesktopAbout = () => import('./pages/HomePage.vue')
const DesktopProjects = () => import('./pages/ProjectsPage.vue')
const ResumePage = () => import('./pages/ResumePage.vue')

const MobileAbout = () => import('./pages/MobileHome.vue')
const MobileResume = () => import('./pages/MobileResume.vue')

const routes = [
  { path: '/', redirect: '/about' },
  { path: '/about', components: { default: DesktopAbout, Mobile: MobileAbout } },
  { path: '/resume', components: { default: ResumePage, Mobile: MobileResume } },
  { path: '/projects/:project?', components: { default: DesktopProjects, Mobile: DesktopProjects } },
  { path: '/:pathMatch(.*)', redirect: '/about' }
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