import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './assets/css/main.css'
import store from '@/store'
import VuePaginate from 'vuejs-paginate';
import GlobalIcon from './components/shared/global-icon.vue';
import notification from '@/plugins/vue-notification'
import axios from '@/plugins/axios'
// import 'vue-notification/dist/theme-sugar.css' // Импортируйте стиль уведомлений
// import Notifications from 'vue-notification'; // Импортируйте плагин

Vue.component('GlobalIcon', GlobalIcon)
Vue.component('VuePaginate', VuePaginate)

// Vue.use(Notifications); // Регистрируйте плагин

new Vue({
  notification,
  router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app')
