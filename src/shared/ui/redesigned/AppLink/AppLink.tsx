import { memo, ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'error';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassName?: string;
}

export const AppLink = memo(
  ({
    className,
    children,
    to,
    variant = 'primary',
    activeClassName = '',
    ...props
  }: AppLinkProps) => (
    <NavLink
      {...props}
      className={({ isActive }) => classNames(classes.appLink, { [activeClassName]: isActive }, [
        className,
        classes[variant],
      ])}
      to={to}
    >
      {children}
    </NavLink>
  ),
);
