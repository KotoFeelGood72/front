import Vue from 'vue'
import Notifications from 'vue-notification'
Vue.use(Notifications, {
  closeDelay: 4500,
  theme: {
    // darken colors are used for background on icon
    colors: {
      success: '#10B981',
      darkenSuccess: '#2d8e36',
      info: '#5d6a89',
      darkenInfo: '#535f7b',
      warning: '#f8a623',
      darkenWarning: '#f69a07',
      error: '#ff4577',
      darkenError: '#ff245f',
      offline: '#ff4577',
      darkenOffline: '#ff245f',
    },
    boxShadow: '10px 5px 5px red',
  },
})
