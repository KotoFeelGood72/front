// Import pages // 


const regionsRoutes = [
  {
    name: 'regions-page',
    path: '/admin/regions/page/:page', 
    component: () => import('@/views/admin/tax/regions/RegionsPage.vue'),
    meta: { layout: 'admin-layout', auth: true },
  },
  {
    path: '/admin/regions/',
    redirect: { name: 'regions-page', params: { page: 1 } },
    meta: { layout: 'admin-layout', auth: true},
  },
  {
    path: '/admin/regions/add', 
    component: () => import('@/views/admin/tax/regions/addRegions.vue'),
    meta: { layout: 'admin-layout', auth: true },
  },
  {
    path: '/admin/regions/edit/:id', 
    component: () => import('@/views/admin/tax/regions/editRegions.vue'),
    meta: { layout: 'admin-layout', auth: true },
  },
];

export default regionsRoutes;