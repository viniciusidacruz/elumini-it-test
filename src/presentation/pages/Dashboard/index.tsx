import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '../../stores';
import { Dashboard } from './dashboard';

export function DashboardContainer() {
  const { user, signOut } = useAuthStore();
  const navigate = useNavigate();

  function logout() {
    signOut();

    navigate('/');
  }

  const hasImageProfile = !!user?.image;

  return <Dashboard logout={logout} hasImageProfile={hasImageProfile} user={user} />;
}
