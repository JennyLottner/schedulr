import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import LoginSignup from '@/pages/LoginSignup.vue'
import Homepage from '../pages/Homepage.vue'

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
    },
    {
      path: '/login',
      name: 'login',
      component: LoginSignup,
    },
  ]
})

export default router
