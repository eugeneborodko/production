import { memo } from 'react';
import { AppLink } from 'shared/ui';
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import classes from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  isCollapsed: boolean;
}

export const SidebarItem = memo(({ item, isCollapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const { Icon, path, text } = item;
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      className={classNames(classes.item, { [classes.collapsed]: isCollapsed })}
      to={path}
      variant={AppLinkVariant.SECONDARY}
    >
      <Icon className={classes.icon} />
      <span className={classes.link}>{t(text)}</span>
    </AppLink>
  );
});
