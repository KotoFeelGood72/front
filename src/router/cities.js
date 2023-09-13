// Import pages // 


const citiesRoutes = [
  {
    name: 'cities-page',
    path: '/admin/cities/page/:page', 
    component: () => import('@/views/admin/tax/city/CitiesPage.vue'),
    meta: { layout: 'admin-layout', auth: true },
  },
  {
    path: '/admin/cities/',
    redirect: { name: 'cities-page', params: { page: 1 } },
    meta: { layout: 'admin-layout', auth: true},
  },
  {
    path: '/admin/cities/add', 
    component: () => import('@/views/admin/tax/city/addCity.vue'),
    meta: { layout: 'admin-layout', auth: true },
  },
  {
    path: '/admin/cities/edit/:id', 
    component: () => import('@/views/admin/tax/city/editCity.vue'),
    meta: { layout: 'admin-layout', auth: true },
  },
];

export default citiesRoutes;