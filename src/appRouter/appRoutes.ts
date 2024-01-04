import MainPage from '../pages/MainPage';
import MoviePage from '../pages/MoviePage';
import MoviesPage from '../pages/MoviesPage';
import PersonPage from '../pages/PersonPage';
import TVShowsPage from '../pages/TVShowsPage';
import { PUBLIC_ROUTES } from '../shared/constants/paths';

type TRoute = {
  path: string;
  Component: React.FC;
};

export const publicRoutes: TRoute[] = [
  { path: PUBLIC_ROUTES.main, Component: MainPage },
  { path: PUBLIC_ROUTES.movies, Component: MoviesPage },
  { path: PUBLIC_ROUTES.tvShows, Component: TVShowsPage },
  { path: PUBLIC_ROUTES.details, Component: MoviePage },
  { path: PUBLIC_ROUTES.person, Component: PersonPage }
];

// export const privateRoutes:TRoute[] = [
//   { path: PUBLIC_ROUTES.main, component: MainPage }
// ];
