import { Navigate, Outlet } from 'react-router-dom';

import { useAuthStore } from '../../presentation/stores';
import { ROUTES } from './routes';

export function PublicRoute() {
  const { user } = useAuthStore();

  return user ? <Navigate to={ROUTES.dashboard.path} replace /> : <Outlet />;
}
