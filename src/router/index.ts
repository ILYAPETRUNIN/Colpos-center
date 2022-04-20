import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LayoutBase from "@/layouts/LayoutBase.vue";
import UIkit from "@/views/UIkit.vue";
import MainPage from "@/views/MainPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/uikit",
    name: "uikit",
    component: UIkit,
  },
  {
    path: "/",
    name: "home",
    component: LayoutBase,
    redirect: { name: 'main' }, 
    children:[
      {
        path: "/main",
        name: "main",
        component: MainPage ,
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
