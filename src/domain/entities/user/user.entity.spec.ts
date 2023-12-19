import { UserEntity } from '.';

describe('User Entity', () => {
  describe('Errors', () => {
    it('should be return throw error when id is invalid', () => {
      expect(() => {
        new UserEntity({
          id: 0,
          lastName: 'last',
          firstName: 'first',
          username: 'example',
          image: 'example.png',
          token: 'example token',
          gender: 'example gender',
          email: 'example@example.com',
        });
      }).toThrow('Id is required');
    });

    it('should be return throw error when username is invalid', () => {
      expect(() => {
        new UserEntity({
          id: 1,
          username: '',
          lastName: 'last',
          firstName: 'first',
          image: 'example.png',
          token: 'example token',
          gender: 'example gender',
          email: 'example@example.com',
        });
      }).toThrow('Username is required');
    });

    it('should be return throw error when token is invalid', () => {
      expect(() => {
        new UserEntity({
          id: 1,
          token: '',
          lastName: 'last',
          firstName: 'first',
          username: 'example',
          image: 'example.png',
          gender: 'example gender',
          email: 'example@example.com',
        });
      }).toThrow('Token is required');
    });

    it('should be return throw error when email is invalid', () => {
      expect(() => {
        new UserEntity({
          id: 1,
          email: '',
          lastName: 'last',
          firstName: 'first',
          username: 'example',
          image: 'example.png',
          token: 'token example',
          gender: 'example gender',
        });
      }).toThrow('Email is required');
    });
  });

  describe('Success', () => {
    it('should be return correct lastName', () => {
      const user = new UserEntity({
        id: 1,
        lastName: 'last',
        firstName: 'first',
        username: 'example',
        image: 'example.png',
        token: 'token example',
        gender: 'example gender',
        email: 'example@example.com',
      });

      expect(user.lastName).toBe('last');
    });

    it('should be return correct lastName without params', () => {
      const user = new UserEntity({
        id: 1,
        lastName: '',
        firstName: 'first',
        username: 'example',
        image: 'example.png',
        token: 'token example',
        gender: 'example gender',
        email: 'example@example.com',
      });

      expect(user.lastName).toBe('Desconhecido');
    });

    it('should be return correct firstName', () => {
      const user = new UserEntity({
        id: 1,
        lastName: 'last',
        firstName: 'first',
        username: 'example',
        image: 'example.png',
        token: 'token example',
        gender: 'example gender',
        email: 'example@example.com',
      });

      expect(user.firstName).toBe('first');
    });

    it('should be return correct firstName without params', () => {
      const user = new UserEntity({
        id: 1,
        firstName: '',
        lastName: 'last',
        username: 'example',
        image: 'example.png',
        token: 'token example',
        gender: 'example gender',
        email: 'example@example.com',
      });

      expect(user.firstName).toBe('Desconhecido');
    });

    it('should be return correct gender', () => {
      const user = new UserEntity({
        id: 1,
        lastName: 'last',
        firstName: 'first',
        username: 'example',
        image: 'example.png',
        token: 'token example',
        gender: 'example gender',
        email: 'example@example.com',
      });

      expect(user.gender).toBe('example gender');
    });

    it('should be return correct gender without params', () => {
      const user = new UserEntity({
        id: 1,
        gender: '',
        lastName: 'last',
        firstName: 'first',
        username: 'example',
        image: 'example.png',
        token: 'token example',
        email: 'example@example.com',
      });

      expect(user.gender).toBe('Outro');
    });

    it('should be return correct id', () => {
      const user = new UserEntity({
        id: 1,
        lastName: 'last',
        firstName: 'first',
        username: 'example',
        image: 'example.png',
        token: 'token example',
        gender: 'example gender',
        email: 'example@example.com',
      });

      expect(user.id).toBe(1);
    });

    it('should be return correct username', () => {
      const user = new UserEntity({
        id: 1,
        lastName: 'last',
        firstName: 'first',
        username: 'example',
        image: 'example.png',
        token: 'token example',
        gender: 'example gender',
        email: 'example@example.com',
      });

      expect(user.username).toBe('example');
    });

    it('should be return correct image', () => {
      const user = new UserEntity({
        id: 1,
        lastName: 'last',
        firstName: 'first',
        username: 'example',
        image: 'example.png',
        token: 'token example',
        gender: 'example gender',
        email: 'example@example.com',
      });

      expect(user.image).toBe('example.png');
    });

    it('should be return correct token', () => {
      const user = new UserEntity({
        id: 1,
        lastName: 'last',
        firstName: 'first',
        username: 'example',
        image: 'example.png',
        token: 'token example',
        gender: 'example gender',
        email: 'example@example.com',
      });

      expect(user.token).toBe('token example');
    });

    it('should be return correct email', () => {
      const user = new UserEntity({
        id: 1,
        lastName: 'last',
        firstName: 'first',
        username: 'example',
        image: 'example.png',
        token: 'token example',
        gender: 'example gender',
        email: 'example@example.com',
      });

      expect(user.email).toBe('example@example.com');
    });
  });
});
