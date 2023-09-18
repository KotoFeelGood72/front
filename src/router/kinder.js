// Import pages // 


const kinderRoutes = [
  {
    name: 'kindergartens-page',
    path: '/admin/kindergartens/page/:page', 
    component: () => import('@/views/admin/tax/kinder/KinderPage.vue'),
    meta: { layout: 'admin-layout', auth: true },
  },
  {
    path: '/admin/kindergartens/',
    redirect: { name: 'kindergartens-page', params: { page: 1 } },
    meta: { layout: 'admin-layout', auth: true},
  },
  {
    path: '/admin/kindergartens/add', 
    component: () => import('@/views/admin/tax/kinder/addKinder.vue'),
    meta: { layout: 'admin-layout', auth: true },
  },
  {
    path: '/admin/kindergartens/edit/:id', 
    component: () => import('@/views/admin/tax/kinder/editKinder.vue'),
    meta: { layout: 'admin-layout', auth: true },
  },
];

export default kinderRoutes;