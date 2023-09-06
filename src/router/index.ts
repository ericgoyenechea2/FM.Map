import { createRouter, createWebHistory } from "vue-router";
import MapView from "../views/MapView.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/map",
      name: "map",
      component: MapView,
    },
  ],
});

export default router;
