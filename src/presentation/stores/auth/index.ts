import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { UserEntity } from '../../../domain/entities/user';
import { STORAGE } from '../../constants';
import { AuthenticationService } from '../../services/authentication';
import { IAuhStore } from './auth.types';

export const useAuthStore = create<IAuhStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      signIn: async (usernameField, password) => {
        const authenticationService = new AuthenticationService();

        const response = await authenticationService.execute({ username: usernameField, password });

        const { id, image, email, firstName, gender, lastName, token, username } = new UserEntity(
          response,
        );

        set(() => ({
          user: {
            id,
            image,
            email,
            token,
            gender,
            lastName,
            username,
            firstName,
          },
        }));
      },
      signOut: () => {
        localStorage.removeItem(STORAGE.user);

        set(() => ({ user: null }));
      },
    }),
    {
      name: STORAGE.user,
    },
  ),
);
