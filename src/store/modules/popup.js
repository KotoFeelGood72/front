export default {
  state: {
    isPopupOpen: false,
  },
  mutations: {
    togglePopup(state) {
      state.isPopupOpen = !state.isPopupOpen
    }
  },
  getters: {
    getPopupStatus(state) {
      return state.isPopupOpen
    }
  }
}