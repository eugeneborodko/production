import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import classes from './Navbar.module.scss';

interface NavBarProps {
  className?: string
}

export const Navbar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();

  return (
    <nav className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.links}>
        <AppLink to="/" variant={AppLinkVariant.SECONDARY}>
          {t('main page')}
        </AppLink>
        <AppLink to="/about" variant={AppLinkVariant.SECONDARY}>
          {t('about page')}
        </AppLink>
      </div>
    </nav>
  );
};
