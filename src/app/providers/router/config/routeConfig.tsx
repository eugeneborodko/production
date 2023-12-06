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
import {
  getRouteAbout,
  getRouteAdminPanel,
  getRouteArticleCreate,
  getRouteArticleDetails,
  getRouteArticleEdit,
  getRouteArticles,
  getRouteForbidden,
  getRouteMain,
  getRouteProfile,
} from '@/shared/consts/router';

export const routeConfig: AppRoutesProps[] = [
  {
    path: getRouteMain(),
    element: <MainPage />,
  },
  {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  {
    path: getRouteArticles(),
    element: <ArticlesPage />,
    authOnly: true,
  },
  {
    path: getRouteArticleDetails(':id'),
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  {
    path: getRouteArticleEdit(':id'),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: getRouteArticleCreate(),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: getRouteAdminPanel(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: ['admin', 'manager'],
  },
  {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
