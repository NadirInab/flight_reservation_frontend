import { createRouter, createWebHashHistory } from 'vue-router';
import adminRoutes from "./adminRoutes";

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('../views/Home.vue')
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
    component: () => import('../views/Sign.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("user")) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/admin',
    component: () => import('../components/admin/dashboard.vue'),
    meta: {
      needsAuth: true
    },
    children: adminRoutes
  },
  {
    path: '/Payement',
    name: 'Payement',
    component: () => import('../components/passenger/Payement.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('auth_token');
  if (to.meta.needsAuth && !token) {
    next('/Sign');
  } else {
    next();
  }
})

export default router
