import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

import { getUserAuthData } from '@/entities/User';
import { RoutePaths } from '@/shared/consts/router';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isAuth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={RoutePaths.main} state={{ from: location }} replace />;
  }

  return children;
};
