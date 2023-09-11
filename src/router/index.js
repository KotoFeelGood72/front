
import Vue from "vue";
import VueRouter from "vue-router";
import store from '@/store';



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
    path: '/register', 
    component: () => import('@/views/admin/auth/AuthRegister.vue'),
    meta: {
      layout: 'auth-layout',
    },
  },
  {
    name: 'countries-page',
    path: '/admin/countries/page/:page', 
    component: CountriesPage,
    meta: {
      layout: 'admin-layout',
      auth: true
    },
  },
  {
    path: '/admin/countries/',
    redirect: { name: 'countries-page', params: { page: 1 } },
    meta: {
      layout: 'admin-layout',
      auth: true
    },
  },
  {
    path: '/admin/city/',
    component: () => import('@/views/admin/tax/city/CityPage.vue'),
    meta: {
      layout: 'admin-layout',
      auth: true
    },
  },
  {
    path: '/admin/countries/add', 
    component: addCountry,
    meta: {
      layout: 'admin-layout',
      auth: true
    },
  },
  {
    path: '/admin/countries/edit/:id', 
    component: editCountry,
    meta: {
      layout: 'admin-layout',
      auth: true
    },
  },
  {
    name: 'admin',
    path: '/admin/',
    component: VDashboard,
    meta: {
      layout: 'admin-layout',
      auth: true
    }
  },
];


const router = new VueRouter({
    mode: 'history',
    routes,
})

function isAuthenticated() {
  const authData = localStorage.getItem('auth');
  return authData ? JSON.parse(authData) : false;
}

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(record => record.meta.auth)
  // console.log(isAuthenticated())
  if (requireAuth && !isAuthenticated()) {
    next('/')
  } else {
    next()
    store.dispatch('refreshTokens')
  }
})


export default router