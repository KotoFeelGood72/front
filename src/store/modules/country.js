import axios from 'axios';

export default {
  state: {
    countries: [],
    currentPage: 1,
    totalPages: 0,
  },

  actions: {
    async actionCountries({ commit }, page) {
      try {
        const response = await axios.get(`admin/countries/page/${page}`);
        const { data, totalPages } = response.data;

        commit('setCountries', data);
        commit('setCurrentPage', page);
        commit('setTotalPages', totalPages);
      } catch (error) {
        console.error(error);
      }
    }
  },

  mutations: {
    setCountries(state, countries) {
      state.countries = countries;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    }
  },

  getters: {
    getCountries(state) {
      return state.countries;
    },
    getCurrentPage(state) {
      return state.currentPage;
    },
    getTotalPages(state) {
      return state.totalPages;
    }
  }
}
