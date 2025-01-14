import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import TechView from '@/views/TechView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tech',
      name: 'tech',
      component: BlogView,
      children: [
        {
          path:':id',
          name:'blog',
          component: TechView
        }
      ],
    },
  ],
})

export default router
