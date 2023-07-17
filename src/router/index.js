
import Vue from "vue";
import VueRouter from "vue-router";
// import store from '@/store';

// Import pages // 

import Countries from '@/views/admin/tax/countries/CountriesPage.vue'
import Country from '@/views/admin/tax/countries/CountryPage.vue'
import VDashboard from "@/views/admin/pages/v-dashboard.vue";

// End import Pages //


Vue.use(VueRouter)

const routes = [
  {
    path: '/admin/countries/', 
    component: Countries,
    meta: {
      layout: 'admin-layout',
    },
  },
  {
    path: '/admin/countries/page/:id', 
    component: Country,
    meta: {
      layout: 'admin-layout',
    }
  },
  {
    path: '/',
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