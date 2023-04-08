import { createRouter, createWebHashHistory } from 'vue-router'

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
  },
  {
    path: '/Payement',
    name: 'Payement',
    component: () => import('../components/Payement.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
