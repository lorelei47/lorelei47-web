import { createRouter, createWebHashHistory } from "vue-router";
import MainLayout from "@/layout/MainLayout.vue";
import Screen from "@/layout/screen/index.vue";
import Components from "@/views/components.js";
import menuList from "@/router/config/menu.js";

const viewComponents = menuList.map((item, index) => {
  return { ...item, component: Components[index] };
});
const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/screen",
    name: "screen",
    component: Screen
  },
  {
    path: "/home",
    name: "home",
    component: MainLayout,
    children: [...viewComponents]
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});
