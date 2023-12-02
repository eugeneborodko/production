import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { AppRoutesProps, routeConfig } from '../config/routeConfig';
import { RequireAuth } from './RequireAuth';
import { RequireRoles } from './RequireRoles';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );

    if (route.authOnly && route.roles) {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={(
            <RequireAuth>
              <RequireRoles roles={route.roles}>{element}</RequireRoles>
            </RequireAuth>
          )}
        />
      );
    }

    if (route.authOnly) {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={<RequireAuth>{element}</RequireAuth>}
        />
      );
    }

    if (route.roles) {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={<RequireRoles roles={route.roles}>{element}</RequireRoles>}
        />
      );
    }

    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
