import axios from 'axios';

export default {
  state: {
    countries: [],
    currentPage: 1,
    totalPages: 0,
    sortField: '', // Поле, по которому происходит сортировка
    sortOrder: 'ASC',
    filters: {
      limit: 10,
      code: '',
      active: 1,
      searchQuery: ''
    },
  },
  actions: {
    async actionCountries({ commit, state }, page) {
      try {
        const params = {
          order: state.sortOrder,
          orderby: state.sortField,
          limit: state.filters.limit,
          ...(state.filters.code && { code: state.filters.code }),
          ...(state.filters.searchQuery && { search: state.filters.searchQuery }),
          ...(state.active && { active: state.active }),
        };
        const response = await axios.get(`admin/countries/page/${page}`, {params})

        const {data} = response.data;
        
        commit('setCountries', data);
        commit('setCurrentPage', page);
        commit('setTotalPages', data.total);
        commit('setSortOrder', state.sortOrder);
        commit('setSortField', state.sortField);
      } catch (error) {
        console.error(error);
      }
    },


    clearSearchQuery({ commit }) {
      commit('CLEAR_SEARCH_QUERY_DATA');
    },
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
    },

    setLimitCountry(state, limit) {
      state.filters.limit = limit;
    },

    setSearchQuery(state, query) {
      state.filters.searchQuery = query;
    },


    CLEAR_SEARCH_QUERY_DATA(state) {
      state.searchQuery = ''; 
    },

    setSortField(state, field) {
      state.sortField = field;
    },
    setSortOrder(state, order) {
      state.sortOrder = order;
    },

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
    },
  }
}
