import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './assets/css/main.css'
import store from '@/store'




import GlobalIcon from './components/shared/global-icon.vue';
Vue.component('GlobalIcon', GlobalIcon)



// axios.defaults.baseURL = process.env.BASE_URL



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
