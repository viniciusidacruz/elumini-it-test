import { IUserEntity } from '../../../domain/entities/user/user.entity.types';

export interface IAuhStore {
  signOut: () => void;
  user: IUserEntity | null;
  isAuthenticated: boolean;
  signIn: (username: string, password: string) => Promise<void>;
}
