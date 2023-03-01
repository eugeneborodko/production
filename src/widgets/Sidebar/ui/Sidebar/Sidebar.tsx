import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui/Button/Button';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import SVGHome from 'shared/assets/icons/home.svg';
import SVGAbout from 'shared/assets/icons/about.svg';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <aside
      className={classNames(
        classes.sidebar,
        { [classes.collapsed]: isCollapsed },
        [className],
      )}
      data-testid="sidebar"
    >
      <div className={classes.links}>
        <AppLink
          className={classes.item}
          to={RoutePaths.main}
          variant={AppLinkVariant.SECONDARY}
        >
          <SVGHome className={classes.icon} />
          <span className={classes.link}>{t('main page')}</span>
        </AppLink>
        <AppLink
          className={classes.item}
          to={RoutePaths.about}
          variant={AppLinkVariant.SECONDARY}
        >
          <SVGAbout className={classes.icon} />
          <span className={classes.link}>{t('about page')}</span>
        </AppLink>
      </div>
      <Button
        className={classes.toggleButton}
        data-testid="sidebar-toggle-button"
        variant={ButtonVariants.CONTAINED}
        size={ButtonSizes.L}
        square
        onClick={onToggle}
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <LanguageSwitcher short={isCollapsed} />
      <ThemeSwitcher />
    </aside>
  );
};
