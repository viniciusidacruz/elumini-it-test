import { BASE_CLIENT } from '../../../configs';
import { AuthenticationService } from '.';

// Mockando o cliente HTTP
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
    const mockUserData = { id: 1, username: 'usuario' };

    (BASE_CLIENT.post as jest.Mock).mockResolvedValue({ data: mockUserData });

    const authenticationRequest = { username: 'usuario', password: 'senha' };

    const result = await authenticationService.execute(authenticationRequest);

    expect(result).toEqual(mockUserData);
  });

  it('should throw an error when authentication fails', async () => {
    (BASE_CLIENT.post as jest.Mock).mockRejectedValue(new Error('Erro na autenticação'));

    const authenticationRequest = { username: 'usuario', password: 'senha' };

    await expect(authenticationService.execute(authenticationRequest)).rejects.toThrowError(
      'Error in get data',
    );
  });
});
