import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './appRoutes';
import Layout from '../components/Layout/Layout';
import LoginPage from '../pages/LoginPage';
import { PUBLIC_ROUTES } from '../shared/constants/paths';
import AuthLayout from '../components/Layout/AuthLayout';

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
    </Routes>
  );
};

export default AppRouter;
