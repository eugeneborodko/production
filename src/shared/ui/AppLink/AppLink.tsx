import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './AppLink.module.scss';

export enum AppLinkVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
}

export const AppLink = memo(
  ({
    className,
    children,
    to,
    variant = AppLinkVariant.PRIMARY,
    ...props
  }: AppLinkProps) => (
    <Link
      {...props}
      className={classNames(classes.appLink, {}, [className, classes[variant]])}
      to={to}
    >
      {children}
    </Link>
  ),
);
