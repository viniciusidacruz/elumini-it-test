import { IUserEntity } from '../../../domain/entities/user/user.entity.types';

export interface IDashboard {
  logout: () => void;
  user: IUserEntity;
  hasImageProfile: boolean;
}
