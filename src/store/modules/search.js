import axios from 'axios';

export default {
  state: {
    searchQuery: null, 
  },
  getters: {
    getSearchQuery(state) {
      return state.searchQuery;
    },
  },
  mutations: {
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    CLEAR_SEARCH_QUERY_DATA(state) {
      state.searchQuery = null; 
    },
  },
  actions: {
    clearSearchQuery({ commit }) {
      commit('CLEAR_SEARCH_QUERY_DATA');
    },
    async updateSearchQuery({ commit }, { query, type}) {
      try {
        const response = await axios.get(`admin/${type}/search/${query}`);
        commit('setSearchQuery', response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
