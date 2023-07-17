import axios from 'axios'



export default {
  state: {
    countries: [],
    currentPage: 1,
    totalPages: 0,
  },

  actions: {
    async actionCountries({commit}, page) {
      try {
        const response = await axios.get(`admin/countries/page/${page}`);
        commit('setCountries', response.data);
      } catch (error) {
        console.error(error);
      }
    }
    
  },

  mutations: {
    setCountries(state, countries) {
      state.countries = countries
    }
  },

  getters: {
    getCountries(state) {
      return state.countries
    }
  }
}
