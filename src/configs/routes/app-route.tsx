import { Route, Routes } from 'react-router-dom';

import * as Pages from '../../presentation/pages';
import { ROUTES } from './routes';

export const AppRoute = () => (
  <Routes>
    <Route path={ROUTES.sign_in.path} element={<Pages.SignInContainer />} />
    <Route path={ROUTES.dashboard.path} element={<Pages.Dashboard />} />
  </Routes>
);
