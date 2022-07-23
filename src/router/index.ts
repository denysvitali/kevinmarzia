import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tavoli',
      name: 'tavoli',
      component: () => import('../views/Tavoli.vue')
    },
    {
      path: '/foto',
      name: 'foto',
      component: () => import('../views/Foto.vue')
    }
  ]
})

export default router
