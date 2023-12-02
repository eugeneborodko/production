import { RouteProps } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AppRoutes, RoutePaths } from '@/shared/config/routeConfig/routeConfig';
import ArticlesPage from '@/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage';
import ArticleDetailsPage from '@/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRoles } from '@/entities/User/model/types/user';
import { ForbiddenPage } from '@/pages/ForbiddenPage';

export type AppRoutesProps = RouteProps & {
  // extend RouteProps
  authOnly?: boolean;
  roles?: UserRoles[];
};

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
