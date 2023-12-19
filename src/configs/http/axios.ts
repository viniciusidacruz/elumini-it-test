import axios from 'axios';

import { errorInterceptor, responseInterceptor } from './interceptors';

export const BASE_CLIENT = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

BASE_CLIENT.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);
