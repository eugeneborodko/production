import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserRoles, UserRoles } from '@/entities/User';
import { RoutePaths } from '@/shared/consts/router';

interface RequireRolesProps {
  children: JSX.Element;
  roles: UserRoles[];
}

export const RequireRoles = ({ children, roles }: RequireRolesProps) => {
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);
  const hasCommonRole = roles.some((role) => userRoles?.includes(role));

  if (!hasCommonRole) {
    return (
      <Navigate to={RoutePaths.forbidden} state={{ from: location }} replace />
    );
  }

  return children;
};
