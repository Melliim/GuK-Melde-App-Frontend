import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoardView from '@/views/BoardView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/upload',
    name: 'home',
    component: HomeView
  }, {
  path: '/dashboard',
    name: 'dashboard',
    component: BoardView
  }, {
  path: '/',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
