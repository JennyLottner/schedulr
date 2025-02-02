import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import HomePage from '../pages/subPages/HomePage.vue'
import MyWorkPage from '../pages/subPages/MyWorkPage.vue'
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
          path: '/',
          name: 'home',
          component: HomePage
        },
        {
          path: '/my_work',
          name: 'my_work',
          component: MyWorkPage
        },
        {
          path: '/board',
          name: 'board',
          component: BoardPage
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
