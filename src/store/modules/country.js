import axios from 'axios';
export default {
  state: {
    countries: [],
    page: 1,
    sortField: '', 
    sortOrder: '',
    activePage: 1,
    countryDetail: {},
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

        // if(page) {
          console.log(params)
          const response = await axios.get(`admin/countries/page/${page}`, { params });
          const { data } = response.data;
          commit('setCountries', data);
          commit('loadmoreCountry', data);
        // }
  

      } catch (error) {
        console.error(error);
      }
    },

    async deleteCountries({ commit, dispatch }, ids) {
      try {
        await axios.post('admin/countries/delete/', ids);

        // console.log(ids)
        
        // Удалите элементы из состояния
        commit('REMOVE_DELETED_ITEMS', ids);
        
        // Перезагрузите данные
        dispatch('actionCountries', { page: 1 });
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

    loadmoreCountry(state, newCountry) {
      state.countries.list = state.countries.list.concat(newCountry)
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


    setCountryDetail(state, country) {
      state.countryDetail = country;
    },

    setChangeStatus(state, status) {
      state.status = status
    },

    setDeleteArr(state, deleteArray) {
      state.deleteArray = deleteArray
    },

    REMOVE_DELETED_ITEMS(state, itemID) {
      let countries = state.countries.list.filter(i => i.id !== itemID)
      state.countries = countries
      state.deleteArray = []
    }
  },

  getters: {

  }
}
