import LoginPage from '../pages/LoginPage/LoginPage';
import MainPage from '../pages/MainPage/MainPage';
import MoviePage from '../pages/MoviePage/MoviePage';
import PersonPage from '../pages/PersonPage/PersonPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import UserActors from '../pages/UserPage/pages/UserActors';
import UserComments from '../pages/UserPage/pages/UserComments';
import UserMovies from '../pages/UserPage/pages/UserMovies';
import UserProfile from '../pages/UserPage/pages/UserProfile';
import UserTVShows from '../pages/UserPage/pages/UserTVShows';
import { APP_ROUTES } from '../shared/constants/paths';

type TRoute = {
  path: string;
  isPrivate: boolean;
  Component: React.FC;
};

export const appRoutes: TRoute[] = [
  { path: APP_ROUTES.main, Component: MainPage, isPrivate: false },
  { path: APP_ROUTES.login, Component: LoginPage, isPrivate: false },
  {
    path: APP_ROUTES.registration,
    Component: RegistrationPage,
    isPrivate: false,
  },
  { path: APP_ROUTES.details, Component: MoviePage, isPrivate: false },
  { path: APP_ROUTES.person, Component: PersonPage, isPrivate: false },
  { path: APP_ROUTES.userProfile, Component: UserProfile, isPrivate: true },
  { path: APP_ROUTES.userComments, Component: UserComments, isPrivate: true },
  { path: APP_ROUTES.userActors, Component: UserActors, isPrivate: true },
  { path: APP_ROUTES.userMovies, Component: UserMovies, isPrivate: true },
  { path: APP_ROUTES.userTVShows, Component: UserTVShows, isPrivate: true },
];
