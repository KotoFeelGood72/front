import axios from 'axios'
import router from '@/router'
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
    async actionsAuth({commit}, formData) {
      try {
        const { data } = await axios.post('login/', formData)
        commit('SET_AUTH', data),
        commit('SET_AUTH_TOKEN', data.data.accessToken)
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.data.accessToken}`;

        localStorage.setItem('auth', data.status)
        router.push('/admin/').catch(err => console.error(err));
      } catch (error) {
        console.log(error);
      }
    },
    
    async refreshTokens({commit}) {
      try {
        const { data } = await axios.post('/refresh-tokens'); // Замените '/refresh-token' на путь к вашему роуту обновления токена
        const newAccessToken = data.data.accessToken;
        commit('SET_AUTH', data),
        commit('SET_AUTH_TOKEN', newAccessToken);
        
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