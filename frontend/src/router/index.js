import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../pages/MainPage.vue";
import HomePage from "../pages/subPages/HomePage.vue";
import MyWorkPage from "../pages/subPages/MyWorkPage.vue";
import BoardPage from "../pages/subPages/BoardPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import PageNotFound from "@/pages/PageNotFound.vue";

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
          component: MyWorkPage,
        },
        {
          path: "/board",
          name: "board",
          component: BoardPage,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404 Page Not Found",
      component: PageNotFound,
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
