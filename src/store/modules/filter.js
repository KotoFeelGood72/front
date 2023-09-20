const state = {
  columns: {
    code: true,
    name: true,
    countryCode: true,
    country: true,
    region: true,
    city: true,
    address: true,
    director: true,
    manager: true,
    active: true,
  },
};

const mutations = {
  toggleColumns(state, columnName) {
    state.columns[columnName] = !state.columns[columnName];
  },
};

const actions = {
  toggleColumn({ commit }, columnName) {
    commit('toggleColumns', columnName);
  },
};

const getters = {
  getColumnVisibility: (state) => (columnName) => {
    return state.columns[columnName];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
