import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import HomePage from '../pages/subPages/HomePage.vue'
import BoardPage from '../pages/subPages/BoardPage.vue'
import LoginSignup from '@/pages/LoginSignup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
      children: [
        {
          path: '/board',
          name: 'board',
          component: BoardPage
        },
        {
          path: '/home',
          name: 'home',
          component: HomePage
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
