import MainPage from '../pages/MainPage';
import MoviesPage from '../pages/MoviesPage';
import TVShowsPage from '../pages/TVShowsPage';
import { PUBLIC_ROUTES } from '../shared/constants/paths';

type TRoute = {
  path: string;
  Component: React.FC;
};

export const publicRoutes: TRoute[] = [
  { path: PUBLIC_ROUTES.main, Component: MainPage },
  { path: PUBLIC_ROUTES.movies, Component: MoviesPage },
  { path: PUBLIC_ROUTES.tvShows, Component: TVShowsPage }
];

// export const privateRoutes:TRoute[] = [
//   { path: PUBLIC_ROUTES.main, component: MainPage }
// ];
