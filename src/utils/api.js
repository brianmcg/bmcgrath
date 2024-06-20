import axios from 'axios';

const auth = {
  username: import.meta.env.VITE_API_USER,
  password: import.meta.env.VITE_API_PASS,
};

export const get = url => axios.get(url, { auth });

export const post = (url, body) => axios.post(url, body, { auth });
