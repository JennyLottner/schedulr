import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Main from '../cmps/boards/Main.vue'
import LoginSignup from '@/pages/LoginSignup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'main',
          component: Main
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
