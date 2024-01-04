import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './appRoutes';
import Layout from '../components/Layout/Layout';
import LoginPage from '../pages/LoginPage/LoginPage';
import { PUBLIC_ROUTES } from '../shared/constants/paths';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {publicRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={<Component />}
          />
        ))}
      </Route>
      <Route
        path={PUBLIC_ROUTES.login}
        element={<LoginPage />}
      />
      <Route
        path={PUBLIC_ROUTES.registration}
        element={<RegistrationPage />}
      />
    </Routes>
  );
};

export default AppRouter;
