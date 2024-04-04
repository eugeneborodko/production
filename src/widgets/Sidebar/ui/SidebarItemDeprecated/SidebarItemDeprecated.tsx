import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { SidebarItemType } from '../../model/types/sidebar';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated';
import { AppLinkVariant } from '@/shared/ui/deprecated/AppLink';
import classes from './SidebarItemDeprecated.module.scss';

interface SidebarItemDeprecatedProps {
  item: SidebarItemType;
  isCollapsed: boolean;
}

export const SidebarItemDeprecated = memo(
  ({ item, isCollapsed }: SidebarItemDeprecatedProps) => {
    const { t } = useTranslation();
    const { Icon, path, text } = item;
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
      return null;
    }

    return (
      <AppLink
        className={classNames(classes.item, {
          [classes.collapsed]: isCollapsed,
        })}
        to={path}
        variant={AppLinkVariant.SECONDARY}
      >
        <Icon className={classes.icon} />
        <span className={classes.link}>{t(text)}</span>
      </AppLink>
    );
  },
);
