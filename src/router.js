import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/information",
    name: "information",
    component: () => import("./components/Homepage")
  },
  {
    path: "/create",
    name: "create",
    component: () => import("./components/CreateInformation")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
