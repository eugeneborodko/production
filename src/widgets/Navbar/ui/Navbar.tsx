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
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { AppLink, Button } from '@/shared/ui/deprecated';
import { ButtonVariants } from '@/shared/ui/deprecated/Button';
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

  const navbarClassName = classes.navbarRedesigned;

  return (
    <nav className={classNames(navbarClassName, {}, [className])}>
      {authData ? (
        <div className={classes.links}>
          <ShowNotifications />
          <AppLink className={classes.link} to={getRouteArticleCreate()}>
            <Button variant={ButtonVariants.OUTLINED_INVERTED}>+</Button>
          </AppLink>
          <Button variant={ButtonVariants.OUTLINED_INVERTED} onClick={onLogout}>
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
      )}

      <LoginModal isOpened={isLoginModalOpened} onClose={onModalClose} />
    </nav>
  );
});
