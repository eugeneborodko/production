import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePaths } from 'shared/config/routeConfig/routeConfig';

export type AppRoutesProps = RouteProps & { // extend RouteProps
  authOnly?: boolean;
}

export const routeConfig: AppRoutesProps[] = [
  {
    path: RoutePaths[AppRoutes.MAIN],
    element: <MainPage />,
  },
  {
    path: RoutePaths[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  {
    path: RoutePaths[AppRoutes.PROFILE],
    element: <ProfilePage />,
    authOnly: true,
  },
  {
    path: RoutePaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
