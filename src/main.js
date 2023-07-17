import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './assets/css/main.css'
import store from '@/store'
import axios from 'axios'




import GlobalIcon from './components/shared/global-icon.vue';
Vue.component('GlobalIcon', GlobalIcon)



axios.defaults.baseURL = process.env.VUE_APP_API_URL + '/api'



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
