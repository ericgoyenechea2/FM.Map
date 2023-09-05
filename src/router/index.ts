import { createRouter, createWebHistory } from 'vue-router'
import FilterView from '../views/FilterView.vue'
import MapView from '../views/MapView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FilterView
    },
    {
      path: '/map',
      name: 'map',
      component: MapView
    }
  ]
})

export default router