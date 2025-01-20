import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
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
          path: '',
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
