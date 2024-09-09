import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../pages/Homepage.vue'
import Main from '../pages/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'home',
          component: Homepage
        },
      ],
    }
  ]
})

export default router
