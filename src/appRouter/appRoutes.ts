import MainPage from '../pages/MainPage';
import { PUBLIC_ROUTES } from '../shared/constants/paths';

type TRoute = {
  path: string;
  Component: React.FC;
};

export const publicRoutes: TRoute[] = [
  { path: PUBLIC_ROUTES.main, Component: MainPage }
];

// export const privateRoutes:TRoute[] = [
//   { path: PUBLIC_ROUTES.main, component: MainPage }
// ];
