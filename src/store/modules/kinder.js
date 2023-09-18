import axios from 'axios';
export default {
  state: {
    kinder: [],
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
    async actionKinder({ commit, state }, { page, field, order }) {
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
          const response = await axios.get(`admin/kindergartens/page/${page}`, { params });
          const { data } = response.data;

          // console.log(response.data)
          commit('setKinder', data);
      } catch (error) {
        console.error(error);
      }
    },

    async deleteKinder({ commit, dispatch }, ids) {
      try {
        await axios.post('admin/kindergartens/delete/', ids);
        commit('REMOVE_DELETED_ITEMS', ids);
        dispatch('actionKinder', { page: 1 });
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


    setKinder(state, kinder) {
      state.kinder = kinder;
    },

    setLimitKinder(state, limit) {
      state.filters.limit = limit;
    },

    setSearchQuery(state, query) {
      state.filters.searchQuery = query;
    },

    CLEAR_SEARCH_QUERY_DATA(state) {
      state.filters.searchQuery = ''; 
    },


    setKinderDetail(state, kinder) {
      state.pageDetail = kinder;
    },

    setChangeStatus(state, status) {
      state.status = status
    },

    setDeleteArr(state, deleteArray) {
      state.deleteArray = deleteArray
    },

    REMOVE_DELETED_ITEMS(state, itemID) {
      let kinder = state.kinder.list.filter(i => i.id !== itemID)
      state.kinder = kinder
      state.deleteArray = []
    }
  },
}
