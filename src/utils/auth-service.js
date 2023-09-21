import axios from 'axios';

const setAuthHeader = async (token) => {
  if (token) {
    axios.defaults.headers = {
      Authorization: token,
    };
    await localStorage.setItem('auth', true);
  } else {
    delete axios.defaults.headers.Authorization;
    await localStorage.setItem('auth', false);
  }
};

export default setAuthHeader;
