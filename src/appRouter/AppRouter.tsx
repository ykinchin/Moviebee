import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import useAuth from '../hooks/useAuth';
import UserLayout from '../pages/UserPage/components/UserLayout';
import { appRoutes } from './appRoutes';

const AppRouter: FC = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <Routes>
      <Route element={<Layout />}>
        {appRoutes.map(({ path, Component, isPrivate }) =>
          (isPrivate && user) || !isPrivate ? (
            isPrivate ? (
              <Route element={<UserLayout />} key={path}>
                <Route key={path} path={path} element={<Component />} />
              </Route>
            ) : (
              <Route key={path} path={path} element={<Component />} />
            )
          ) : null,
        )}
      </Route>
    </Routes>
  );
};

export default AppRouter;
