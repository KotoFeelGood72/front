import Vue from 'vue'
import Vuex from 'vuex'
import country from './modules/country'
import search from './modules/search'
import popup from './modules/popup'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      country,
      search,
      popup
    }
})