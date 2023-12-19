import { BASE_CLIENT } from '../../../configs';
import { IUserEntity } from '../../../domain/entities/user/user.entity.types';
import { IAuthenticationRequest } from './authentication.types';

export class AuthenticationService {
  async execute({ username, password }: IAuthenticationRequest): Promise<IUserEntity | Error> {
    try {
      const { data } = await BASE_CLIENT.post<IUserEntity>('/auth/login', {
        password,
        username,
      });

      if (data) {
        return data;
      }

      return new Error('Erro ao validar credenciais');
    } catch (err) {
      console.error(err);
      return new Error((err as { message: string }).message || 'Erro ao validar credenciais');
    }
  }
}
