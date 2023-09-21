import axios from 'axios'
import router from '@/router'
import setAuthHeader from '@/utils/auth-service'
export default {
  state: {
    authenticated: false,
    token: '',
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
        setAuthHeader(data.data.accessToken)
    
        localStorage.setItem('auth', data.status);
        router.push('/admin/').catch((err) => console.error(err));
      } catch (error) {
        console.log(error);
      }
    },
    
    
    async refreshTokens({ commit, state }) {
      try {
        const { data } = await axios.post('/refresh-tokens', {
          accessToken: state.token,
        });
    
        setAuthHeader(data.data.accessToken)
        commit('SET_AUTH', data);
        commit('SET_AUTH_TOKEN', data.data.accessToken);
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
      router.push('/login/').catch(err => console.error(err));
    }
  },
}