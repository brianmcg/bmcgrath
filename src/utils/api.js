import axios from 'axios';

const auth = {
  username: import.meta.env.VITE_API_USER,
  password: import.meta.env.VITE_API_PASS,
};

export function get(path) {
  return axios.get(`${import.meta.env.VITE_API_URL}/${path}`, { auth });
}

export function post(path, body) {
  return axios.post(`${import.meta.env.VITE_API_URL}/${path}`, body, { auth });
}
