// Import pages // 


const countriesRoutes = [
  {
    name: 'countries-page',
    path: '/admin/countries/page/:page', 
    component: () => import('@/views/admin/tax/countries/CountriesPage.vue'),
    meta: { layout: 'admin-layout', auth: true },
  },
  {
    path: '/admin/countries/',
    redirect: { name: 'countries-page', params: { page: 1 } },
    meta: { layout: 'admin-layout', auth: true},
  },
  {
    path: '/admin/countries/add', 
    component: () => import('@/views/admin/tax/countries/addCountry.vue'),
    meta: { layout: 'admin-layout', auth: true },
  },
  {
    path: '/admin/countries/edit/:id', 
    component: () => import('@/views/admin/tax/countries/editCountry.vue'),
    meta: { layout: 'admin-layout', auth: true },
  },
];

export default countriesRoutes;