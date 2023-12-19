import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../configs/routes/routes';
import { useAuthStore } from '../../stores';
import { Dashboard } from './dashboard';

export function DashboardContainer() {
  const { user, signOut } = useAuthStore();
  const navigate = useNavigate();

  function logout() {
    signOut();

    navigate(ROUTES.sign_in.path);
  }

  const hasImageProfile = !!user?.image;

  return <Dashboard logout={logout} hasImageProfile={hasImageProfile} user={user} />;
}
