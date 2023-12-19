import { Navigate, Outlet } from 'react-router-dom';

import { useAuthStore } from '../../presentation/stores';
import { ROUTES } from './routes';

export function PrivateRoute() {
  const { user } = useAuthStore();

  return user ? <Outlet /> : <Navigate to={ROUTES.sign_in.path} replace />;
}
