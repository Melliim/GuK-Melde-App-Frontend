import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoardView from '@/views/BoardView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
  path: '/dashboard',
    name: 'dashboard',
    component: BoardView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
