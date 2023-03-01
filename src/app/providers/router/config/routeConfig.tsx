import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePaths } from 'shared/config/routeConfig/routeConfig';

export const routeConfig: RouteProps[] = [
  {
    path: RoutePaths[AppRoutes.MAIN],
    element: <MainPage />,
  },
  {
    path: RoutePaths[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  {
    path: RoutePaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
