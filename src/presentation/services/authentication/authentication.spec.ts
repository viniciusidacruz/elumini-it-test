import { BASE_CLIENT } from '../../../configs';
import { IUserEntity } from '../../../domain/entities/user/user.entity.types';
import { AuthenticationService } from '.';
import { IAuthenticationRequest } from './authentication.types';

jest.mock('../../../configs', () => ({
  BASE_CLIENT: {
    post: jest.fn(),
  },
}));

describe('AuthenticationService', () => {
  let authenticationService: AuthenticationService;

  beforeEach(() => {
    authenticationService = new AuthenticationService();
  });

  it('should return a user when successfully authenticating', async () => {
    const mockUserData: IUserEntity = {
      id: 1,
      lastName: 'last',
      firstName: 'first',
      username: 'example',
      image: 'example.png',
      token: 'example token',
      gender: 'example gender',
      email: 'example@example.com',
    };

    (BASE_CLIENT.post as jest.Mock).mockResolvedValue({ data: mockUserData });

    const authenticationRequest: IAuthenticationRequest = {
      username: 'kminchelle',
      password: '0lelplR',
    };

    const result = await authenticationService.execute(authenticationRequest);

    expect(result).toEqual(mockUserData);
  });
});
