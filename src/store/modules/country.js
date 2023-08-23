import axios from 'axios';
export default {
  state: {
    countries: [],
    sortField: '', 
    sortOrder: '',
    filters: {
      limit: 10,
      code: '',
      active: 1,
      searchQuery: ''
    },
  },
  actions: {
    async actionCountries({ commit, state }, { page, field, order }) {
      try {
        const params = {
          limit: state.filters.limit,
          ...(order && { orderby: field, order: order }),
          ...(state.filters.code && { code: state.filters.code }),
          ...(state.active && { active: state.active }),
        };
  
        if (state.filters.searchQuery.trim() !== '') {
          params.search = state.filters.searchQuery;
        }
  
        const response = await axios.get(`admin/countries/page/${page}`, { params });
        const { data } = response.data;
  
        commit('setCountries', data);
        commit('setCurrentPage', page);
        commit('setTotalPages', data.total);
        commit('setSortOrder', order);
        commit('setSortField', field);

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
      state.filters.searchQuery = ''; 
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
