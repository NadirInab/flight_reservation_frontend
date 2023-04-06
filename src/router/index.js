import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component : ()=> import('../views/Home.vue')
  },
  {
    path: '/About',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Flights',
    name: 'Flights',
    component: () => import('../views/Flights.vue')
  },
  {
    path: '/Sign',
    name: 'Sign',
    component: () => import('../views/Sign.vue')
  }, 
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../components/admin/dashboard.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
