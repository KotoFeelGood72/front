import axios from 'axios';
export default {
  state: {
    cities: [],
    page: 1,
    activePage: 1,
    pageDetail: {},
    status: Number,
    deleteArray: [],
    filters: {
      limit: 10,
      code: '',
      active: 1,
      searchQuery: ''
    },
  },
  actions: {
    async actionCities({ commit, state }, { page, field, order }) {
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
          const response = await axios.get(`admin/cities/page/${page}`, { params });
          const { data } = response.data;
          commit('setCities', data);
      } catch (error) {
        console.error(error);
      }
    },

    async deleteCities({ commit, dispatch }, ids) {
      try {
        await axios.post('admin/cities/delete/', ids);
        commit('REMOVE_DELETED_ITEMS', ids);
        dispatch('actionCities', { page: 1 });
      } catch (error) {
        console.error(error);
      }
    },
  
    
    clearSearchQuery({ commit }) {
      commit('CLEAR_SEARCH_QUERY_DATA');
    },
  },

  mutations: {

    setSortOrder(state, sortOrder) {
      state.sortOrder = sortOrder;
    },


    setCities(state, cities) {
      state.cities = cities;
    },

    setLimitCities(state, limit) {
      state.filters.limit = limit;
    },

    setSearchQuery(state, query) {
      state.filters.searchQuery = query;
    },

    CLEAR_SEARCH_QUERY_DATA(state) {
      state.filters.searchQuery = ''; 
    },


    setCitiesDetail(state, cities) {
      state.pageDetail = cities;
    },

    setChangeStatus(state, status) {
      state.status = status
    },

    setDeleteArr(state, deleteArray) {
      state.deleteArray = deleteArray
    },

    REMOVE_DELETED_ITEMS(state, itemID) {
      let cities = state.cities.list.filter(i => i.id !== itemID)
      state.cities = cities
      state.deleteArray = []
    }
  },
}
