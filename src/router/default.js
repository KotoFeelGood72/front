


const defaultRoutes = [
  {
    path: '/', 
    component: () => import('@/views/WelcomeSite.vue'),
    meta: { layout: 'empty-layout', },
  },
  {
    path: '/login', 
    component: () => import('@/views/admin/auth/AuthUser.vue'),
    meta: { layout: 'auth-layout', },
  },
  {
    path: '/register', 
    component: () => import('@/views/admin/auth/AuthRegister.vue'),
    meta: { layout: 'auth-layout', },
  },
];

export default defaultRoutes;