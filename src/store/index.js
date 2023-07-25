import Vue from 'vue'
import Vuex from 'vuex'
import country from './modules/country'
import search from './modules/search'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      country,
      search
    }
})