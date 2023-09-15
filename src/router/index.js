
import Vue from "vue";
import VueRouter from "vue-router";
import store from '@/store';



import countriesRoutes from "./countries";
import regionsRoutes from "./regions";
import citiesRoutes from "./cities";
import defaultRoutes from './default'

import VDashboard from "@/views/admin/pages/v-dashboard.vue";

// End import Pages //


Vue.use(VueRouter)

const routes = [
  ...countriesRoutes,
  ...regionsRoutes,
  ...defaultRoutes,
  ...citiesRoutes,
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
  const requireAuth = to.matched.some(record => record.meta.auth)
  const token = store.getters.getAccessToken;

  if (requireAuth && !isAuthenticated()) {
    next('/');
  } else if (requireAuth && !token) {
    next('/');
  } else {
    store.dispatch('refreshTokens')
      .then(() => {
        next();
      })
      .catch(() => {
        next('/');
      });
  }
})


export default router