import { createRouter, createWebHistory } from "vue-router";
import Profile from "../view/profile.vue";
import HomePage from "../view/home-page.vue";

const routes = [
  { path: "/", name: "home-page", component: HomePage },
  { path: "/profile", name: "profile", component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
