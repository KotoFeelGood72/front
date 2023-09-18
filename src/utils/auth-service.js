import axios from 'axios'

const setAuthHeader = (token) => {
  if(token) {
    axios.defaults.headers = {
      Authorization: token
    }
    localStorage.setItem('auth', true);
  } else {
    delete axios.defaults.headers.Authorization
    localStorage.setItem('auth', false);
  }
}

export default setAuthHeader