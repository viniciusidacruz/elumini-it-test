import { BASE_CLIENT } from '../../../configs';
import { IUserEntity } from '../../../domain/entities/user/user.entity.types';
import { IAuthenticationRequest } from './authentication.types';

export class AuthenticationService {
  async execute({ username, password }: IAuthenticationRequest): Promise<IUserEntity> {
    try {
      const { data } = await BASE_CLIENT.post<IUserEntity>('/auth/login', {
        password,
        username,
      });

      return data;
    } catch (err) {
      throw new Error('Error in get data');
    }
  }
}
