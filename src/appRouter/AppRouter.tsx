import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './appRoutes';
import Layout from '../components/Layout/Layout';

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
    </Routes>
  );
};

export default AppRouter;
