import { UserEntity } from '../../../domain/entities/user';
import { Dashboard } from './dashboard';

export function DashboardContainer() {
  function signOut() {
    console.log('signOut');
  }

  const hasImageProfile = false;

  const user = new UserEntity({
    id: 1,
    email: 'example@gmail.com',
    image: '',
    token: 'example',
    firstName: 'First',
    gender: '',
    lastName: '',
    username: '',
  });

  return <Dashboard logout={signOut} hasImageProfile={hasImageProfile} user={user} />;
}
