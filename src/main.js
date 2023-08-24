import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './assets/css/main.css'
import store from '@/store'
import axios from 'axios'
import VuePaginate from 'vuejs-paginate'; // Импортируйте плагин
import GlobalIcon from './components/shared/global-icon.vue';

Vue.component('GlobalIcon', GlobalIcon)
Vue.component('VuePaginate', VuePaginate)

// axios.defaults.baseURL = process.env.VUE_APP_API_URL + '/api'
axios.defaults.baseURL = '/api'

Vue.use(VuePaginate); // Используйте плагин

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
