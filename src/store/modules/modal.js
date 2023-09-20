// store/modules/modal.js
export default {
  state: {
    modal: {
      user: false,
      note: false,
      filter: false,
      visibles: false,
    }
  },
  mutations: {
    openPopup(state, modalName) {
      if (state.modal[modalName]) {
        state.modal[modalName] = false;
      } else {
        for (const key in state.modal) {
          if (Object.hasOwnProperty.call(state.modal, key)) {
            state.modal[key] = false;
          }
        }
        state.modal[modalName] = true;
      }
    },
    closePopup(state, modalName) {
      state.modal[modalName] = false;
    }
  },
  getters: {
    getPopup: (state) => (modalName) => {
      return state.modal[modalName]
    }
  }
}