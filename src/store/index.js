import Vue from 'vue'
import Vuex from 'vuex'
import country from './modules/country'
import search from './modules/search'
import popup from './modules/popup'
import auth from './modules/auth'
import modal from './modules/modal'
import alert from './modules/alert'


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      country,
      search,
      popup,
      auth,
      modal,
      alert
    }
})