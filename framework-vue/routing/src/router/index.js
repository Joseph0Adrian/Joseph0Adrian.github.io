import { createRouter, createWebHistory } from 'vue-router'
import Prologo from '../views/Prologo.vue'
import Uno from '../views/Uno.vue'
import Dos from '../views/Dos.vue'

const routes = [
  {
    path: '/prologo',
    name: 'Prologo',
    component: Prologo
  },
  {
    path: '/uno',
    name: 'Uno',
    component: Uno
  },
  {
    path: '/dos',
    name:'Dos',
    component: Dos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router