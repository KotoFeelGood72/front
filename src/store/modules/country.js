import api from '@/api/api.js'



export default {
  state: {
    countries: [],
    currentPage: 1,
    totalPages: 0,
  },

  actions: {
    async actionCountries({commit}) {
      const response = await api.post(`admin/countries/page/1`)
      commit('setCountries', response.data)
      console.log(response.data)
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
