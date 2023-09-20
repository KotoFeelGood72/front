
import Vue from "vue";
import VueRouter from "vue-router";
import store from '@/store';



import countriesRoutes from "./countries";
import regionsRoutes from "./regions";
import citiesRoutes from "./cities";
import kinderRoutes from "./kinder";
import defaultRoutes from './default'

import VDashboard from "@/views/admin/pages/v-dashboard.vue";

// End import Pages //


Vue.use(VueRouter)

const routes = [
  ...countriesRoutes,
  ...regionsRoutes,
  ...defaultRoutes,
  ...citiesRoutes,
  ...kinderRoutes,
  {
    path: '/admin/',
    component: VDashboard,
    meta: { layout: 'admin-layout', auth: true }
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
  const AccessToken = localStorage.getItem('id_token')

  console.log(AccessToken, 'Текущий токен')
  
  const requireAuth = to.matched.some(record => record.meta.auth)

  console.log(requireAuth)

  if (requireAuth && !isAuthenticated() && !AccessToken) {
    next('/login')
  } else {
    store.dispatch('refreshTokens')
    next();
    console.log(store.getters.getAccessToken, 'GETTERS')
  }
})


export default router