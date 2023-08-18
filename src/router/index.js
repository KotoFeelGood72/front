
import Vue from "vue";
import VueRouter from "vue-router";
// import store from '@/store';

// Import pages // 

import CountriesPage from '@/views/admin/tax/countries/CountriesPage.vue'
import addCountry from "@/views/admin/tax/countries/addCountry.vue";
import editCountry from "@/views/admin/tax/countries/editCountry.vue";


import VDashboard from "@/views/admin/pages/v-dashboard.vue";

// End import Pages //


Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    component: () => import('@/views/WelcomeSite.vue'),
    meta: {
      layout: 'empty-layout',
    },
  },
  {
    path: '/login', 
    component: () => import('@/views/admin/auth/AuthUser.vue'),
    meta: {
      layout: 'auth-layout',
    },
  },
  {
    path: '/admin/countries/page/:page', 
    component: CountriesPage,
    meta: {
      layout: 'admin-layout',
    },
  },
  {
    path: '/admin/countries/add', 
    component: addCountry,
    meta: {
      layout: 'admin-layout',
    },
  },
  {
    path: '/admin/countries/edit/:id', 
    component: editCountry,
    meta: {
      layout: 'admin-layout',
    },
  },
  {
    path: '/admin',
    component: VDashboard,
    meta: {
      layout: 'admin-layout',
    }
  },
];


const router = new VueRouter({
    mode: 'history',
    routes,
})


export default router