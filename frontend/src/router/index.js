import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import HomePage from "@/pages/subPages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "",
      component: MainPage,
      children: [
        {
          path: "/",
          name: "Home",
          component: HomePage,
        },
        {
          path: "/my_work",
          name: "My Work",
          component: () => import('@/pages/subPages/MyWorkPage.vue'),
        },
        {
          path: "/board",
          name: "board",
          component: () => import('@/pages/subPages/BoardPage.vue'),
        },
      ],
    },
    {
      path: "/log_in",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/sign_up_new",
      name: "Sign-up new",
      component: () => import('@/pages/SignupPageA.vue'),
    },
    {
      path: "/sign_up",
      name: "Sign-up",
      component: () => import('@/pages/SignupPageB.vue'),
    },
    {
      path: "/about",
      name: "About",
      component: () => import('@/pages/AboutPage.vue'),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404 Page Not Found",
      component: () => import('@/pages/PageNotFound.vue'),
    },
  ],
});

export default router;

// Dynamic title based on route name
router.afterEach((to) => {
  if (to.name === "board") {
    if (!to.params.boardId) document.title = `schedulr | board`;
    else {
      const boardId = to.params.boardId;
      const boardName = getBoardName(boardId);
      document.title = `schedulr | ${boardName}`;
    }
  } else if (to.name) document.title = `schedulr - ${to.name}`;
  else document.title = "schedulr";
});

const getBoardName = (boardId) => {
  const board = store.getters['boards/boards'].find((board) => board.id === boardId)
  return board ? board.name : 'Board';
}
