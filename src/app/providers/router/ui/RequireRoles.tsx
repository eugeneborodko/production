import { getUserRoles } from 'entities/User';
import { UserRoles } from 'entities/User/model/types/user';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';

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