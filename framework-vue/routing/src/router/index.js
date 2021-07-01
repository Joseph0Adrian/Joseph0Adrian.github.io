import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Prologo from '../views/Prologo.vue'
import Uno from '../views/Uno.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/prologo',
    name: 'Prologo',
    component: Prologo
  },
  {
    path: '/uno',
    name: 'Uno',
    component: Uno
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
