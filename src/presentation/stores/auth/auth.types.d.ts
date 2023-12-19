import { IUserEntity } from '../../../domain/entities/user/user.entity.types';

export interface IAuhStore {
  error: string;
  signOut: () => void;
  user: IUserEntity | null;
  signIn: (username: string, password: string) => Promise<void>;
}
