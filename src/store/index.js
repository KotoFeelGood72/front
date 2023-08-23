import Vue from 'vue'
import Vuex from 'vuex'
import country from './modules/country'
import search from './modules/search'
import popup from './modules/popup'
// import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
    // plugins: [createPersistedState()],
    modules: {
      country,
      search,
      popup
    }
})