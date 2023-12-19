import { BrowserRouter } from 'react-router-dom';

import { AppRoute } from './configs';

export const App = () => (
  <BrowserRouter>
    <AppRoute />
  </BrowserRouter>
);
