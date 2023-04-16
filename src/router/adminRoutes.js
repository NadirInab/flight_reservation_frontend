

const routes = [
    {
      path: "/admin",
      redirect: "/admin/statistics"
    },
    {
      path: "/admin/statistics",
      name : "admin.statistics",
      component:  () => import('../components/admin/Statistics.vue')  
    },
    {
      path: "/admin/users",
      component: ()=> import('../components/admin/Users.vue')
    },
    {
      path: "/admin/flights",
      component: () => import('../views/Flights.vue')
    },
    {
      path: "/admin/tickets",
      component: ()=> import('../components/admin/Tickets.vue')
    },
    {
      path: "/admin/profile",
      component: () => import('../components/admin/Profile.vue')
    }
  ]

  export default routes ;