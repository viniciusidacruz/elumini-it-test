import { AxiosError } from 'axios';

export function errorInterceptor(error: AxiosError) {
  if (error.message === 'Network Error') {
    return Promise.reject(new Error('Erro na conexão'));
  }

  if (error.response?.status === 400) {
    return Promise.reject(new Error('Credenciais inválidas'));
  }

  return Promise.reject(error);
}
