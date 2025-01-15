import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/Home.vue'
import MainPage from '../pages/subPages/Main.vue'
import LoginSignup from '@/pages/LoginSignup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      children: [
        {
          path: '',
          name: 'main',
          component: MainPage
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
