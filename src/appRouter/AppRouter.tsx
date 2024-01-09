import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { appRoutes } from './appRoutes';
import Layout from '../components/Layout/Layout';
import LoginPage from '../pages/LoginPage/LoginPage';
import { APP_ROUTES } from '../shared/constants/paths';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import useAuth from '../hooks/useAuth';

const AppRouter: FC = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <Routes>
      <Route element={<Layout />}>
        {appRoutes.map(({ path, Component, isPrivate }, i) =>
          (isPrivate && user) || !isPrivate ? (
            <Route
              key={i}
              path={path}
              element={<Component />}
            />
          ) : null
        )}
      </Route>
      <Route
        path={APP_ROUTES.login}
        element={<LoginPage />}
      />
      <Route
        path={APP_ROUTES.registration}
        element={<RegistrationPage />}
      />
    </Routes>
  );
};

export default AppRouter;
