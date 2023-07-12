
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Vue3Lottie from 'vue3-lottie'


createApp(App).use(router, Vue3Lottie).mount('#app')
