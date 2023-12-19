import axios from 'axios';

export const BASE_CLIENT = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
