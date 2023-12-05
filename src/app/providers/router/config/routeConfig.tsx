import { AppRoutesProps } from '../types';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { AppRoutes, RoutePaths } from '@/shared/consts/router';

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
    path: `${RoutePaths[AppRoutes.PROFILE]}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  {
    path: RoutePaths[AppRoutes.ARTICLES],
    element: <ArticlesPage />,
    authOnly: true,
  },
  {
    path: `${RoutePaths[AppRoutes.ARTICLE_DETAILS]}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  {
    path: `${RoutePaths[AppRoutes.ARTICLE_EDIT]}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: `${RoutePaths[AppRoutes.ARTICLE_CREATE]}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: `${RoutePaths[AppRoutes.ADMIN_PANEL]}`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: ['admin', 'manager'],
  },
  {
    path: `${RoutePaths[AppRoutes.FORBIDDEN]}`,
    element: <ForbiddenPage />,
  },
  {
    path: RoutePaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
