// // store/modules/modal.js
// export default {
//   state: {
//     alert: {
//       addSuccess: false,
//       editSuccess: false,
//       deleteSuccess: false,
//       addDanger: false,
//       editDanger: false,
//       deleteDanger: false,
//     }
//   },
//   mutations: {
//     openAlert(state, modalName) {
//       if (state.alert[modalName]) {
//         state.alert[modalName] = false;
//       } else {
//         for (const key in state.alert) {
//           if (Object.hasOwnProperty.call(state.alert, key)) {
//             state.alert[key] = false;
//           }
//         }
//         state.alert[modalName] = true;
//       }
//     }
//   },
//   getters: {
//     getAlert: (state) => (modalName) => {
//       return state.alert[modalName]
//     }
//   }
// }