import MainPage from '../pages/MainPage/MainPage';
import MoviePage from '../pages/MoviePage/MoviePage';
import PersonPage from '../pages/PersonPage/PersonPage';
import { PUBLIC_ROUTES } from '../shared/constants/paths';

type TRoute = {
  path: string;
  isPrivate: boolean;
  Component: React.FC;
};

export const publicRoutes: TRoute[] = [
  { path: PUBLIC_ROUTES.main, Component: MainPage },
  { path: PUBLIC_ROUTES.details, Component: MoviePage },
  { path: PUBLIC_ROUTES.person, Component: PersonPage }
];

// export const privateRoutes:TRoute[] = [
//   { path: PUBLIC_ROUTES.main, component: MainPage }
// ];
