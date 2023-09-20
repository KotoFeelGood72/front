import axios from 'axios'
import router from '@/router'
import setAuthHeader from '@/utils/auth-service'
export default {
  state: {
    authenticated: null,
    token: localStorage.getItem('token') || '',
    user: {
      id: null,
      email: '',
      roleId: null
    }
  },
  
  getters: {
    getAccessToken(state) {
      return state.token
    },
    getAuth(state) {
      return state.authenticated
    }
  },

  mutations: {
    SET_AUTH(state, authenticated) {
      state.authenticated = authenticated
    },
    SET_AUTH_TOKEN(state, token) {
      state.token = token
    },
  },

  actions: {
    async actionsAuth({ commit }, formData) {
      try {
        const { data } = await axios.post('login/', formData);
        
        commit('SET_AUTH', data);
        
        commit('SET_AUTH_TOKEN', data.data.accessToken);

        localStorage.setItem('auth', data.status);

        localStorage.setItem('id_token', data.data.accessToken);
        const token = localStorage.getItem('id_token')

        setAuthHeader(token)
    
        router.push('/admin/').catch((err) => console.error(err));
      } catch (error) {
        console.log(error);
      }
    },
    
    
    async refreshTokens({ commit }) {
      const refreshAccessToken = localStorage.getItem('id_token')
      try {
        const { data } = await axios.post('/refresh-tokens', {
          accessToken: refreshAccessToken,
        });
  

        setAuthHeader(refreshAccessToken)
        commit('SET_AUTH', data);
        commit('SET_AUTH_TOKEN', refreshAccessToken);
      } catch (error) {
        // Обработка ошибки обновления токена
        console.error(error);
        // throw error; // Можно выбросить ошибку для дальнейшей обработки на клиенте
      }
    },
    
    
    
    async logout({commit}) {
      await axios.post('logout/')
      commit('SET_AUTH', false),
      commit('SET_AUTH_TOKEN', '');
      localStorage.removeItem('auth');
      localStorage.removeItem('id_token');
      router.push('/login/').catch(err => console.error(err));
    }
  },
}