import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData, logout } from '@/entities/User';
import {
  LoginModal,
  getLoginError,
  resetLoginError,
} from '@/features/AuthByUsername';
import { ShowNotifications } from '@/features/ShowNotifications';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/consts/localStorage';
import { getRouteArticleCreate } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature, toggleFeatures } from '@/shared/lib/featureFlags';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { AppLink, Button } from '@/shared/ui';
import { ButtonVariants } from '@/shared/ui/Button';
import classes from './Navbar.module.scss';

interface NavBarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isLoginModalOpened, setIsLoginModalOpened] = useState<boolean>(false);
  const authData = useSelector(getUserAuthData);
  const error = useSelector(getLoginError);

  const onModalClose = useCallback(() => {
    setIsLoginModalOpened(false);
    if (error) {
      dispatch(resetLoginError());
    }
  }, [dispatch, error]);

  const onModalOpen = useCallback(() => {
    setIsLoginModalOpened(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(logout());
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
  }, [dispatch]);

  const navbarClassName = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => classes.navbarRedesigned,
    off: () => classes.navbar,
  });

  return (
    <nav className={classNames(navbarClassName, {}, [className])}>
      <ToggleFeature
        feature="isAppRedesigned"
        on={
          authData ? (
            <div className={classes.links}>
              <ShowNotifications />
              <AppLink className={classes.link} to={getRouteArticleCreate()}>
                <Button variant={ButtonVariants.OUTLINED_INVERTED}>+</Button>
              </AppLink>
              <Button
                variant={ButtonVariants.OUTLINED_INVERTED}
                onClick={onLogout}
              >
                {t('Log out')}
              </Button>
            </div>
          ) : (
            <Button
              variant={ButtonVariants.OUTLINED_INVERTED}
              onClick={onModalOpen}
            >
              {t('Log in')}
            </Button>
          )
        }
        off={
          authData ? (
            <div className={classes.links}>
              <ShowNotifications />
              <AppLink className={classes.link} to={getRouteArticleCreate()}>
                <Button variant={ButtonVariants.OUTLINED_INVERTED}>
                  {t('create article')}
                </Button>
              </AppLink>
              <Button
                variant={ButtonVariants.OUTLINED_INVERTED}
                onClick={onLogout}
              >
                {t('Log out')}
              </Button>
            </div>
          ) : (
            <Button
              variant={ButtonVariants.OUTLINED_INVERTED}
              onClick={onModalOpen}
            >
              {t('Log in')}
            </Button>
          )
        }
      />

      <LoginModal isOpened={isLoginModalOpened} onClose={onModalClose} />
    </nav>
  );
});
