import { createRouter, createWebHistory } from 'vue-router'
import BoardView from '@/views/BoardView.vue'
import LoginView from '@/views/LoginView.vue'
import UploadView from '@/views/UploadView'
import ContactForm from '@/components/ContactForm.vue'
import FaceId from '@/components/FaceId.vue'

const routes = [
  {
    path: '/upload',
    name: 'upload',
    component: UploadView
  }, {
  path: '/dashboard',
    name: 'dashboard',
    component: BoardView
  }, {
  path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: "/contact",
    name: 'contact',
    component: ContactForm
  },
  {
  path: '/face',
    name: 'face',
    component: FaceId
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
