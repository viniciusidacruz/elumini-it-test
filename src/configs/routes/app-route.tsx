import { Route, Routes } from 'react-router-dom';

import * as Pages from '../../presentation/pages';
import { PrivateRoute } from './private-route';
import { PublicRoute } from './public.route';
import { ROUTES } from './routes';

export const AppRoute = () => (
  <Routes>
    <Route element={<PublicRoute />}>
      <Route path={ROUTES.sign_in.path} element={<Pages.SignInContainer />} />
    </Route>

    <Route element={<PrivateRoute />}>
      <Route path={ROUTES.dashboard.path} element={<Pages.DashboardContainer />} />
    </Route>
  </Routes>
);
