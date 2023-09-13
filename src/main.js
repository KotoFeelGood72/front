/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './assets/css/main.css'
import store from '@/store'
import VuePaginate from 'vuejs-paginate';
import GlobalIcon from './components/shared/global-icon.vue';
import notification from '@/plugins/vue-notification'
import axios from '@/plugins/axios'

Vue.component('GlobalIcon', GlobalIcon)
Vue.component('VuePaginate', VuePaginate)


new Vue({
  router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app')
