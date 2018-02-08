import axios from 'axios';

export const setAuthorizationHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteAuthorizationHeader = () => {
  delete axios.defaults.headers.common['Authorization'];
};
