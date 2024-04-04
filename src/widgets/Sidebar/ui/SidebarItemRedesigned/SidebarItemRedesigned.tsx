import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { SidebarItemType } from '../../model/types/sidebar';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, Icon } from '@/shared/ui/redesigned';
import classes from './SidebarItemRedesigned.module.scss';

interface SidebarItemRedesignedProps {
  item: SidebarItemType;
  isCollapsed: boolean;
}

export const SidebarItemRedesigned = memo(
  ({ item, isCollapsed }: SidebarItemRedesignedProps) => {
    const { t } = useTranslation();
    const { path, text } = item;
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
        variant="primary"
      >
        <Icon className={classes.icon} Svg={item.Icon} />
        <span className={classes.text}>{t(text)}</span>
      </AppLink>
    );
  },
);
