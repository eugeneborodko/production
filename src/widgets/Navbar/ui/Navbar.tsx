import { getUserAuthData, logout } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { resetLoginError } from 'features/AuthByUsername/model/slice/loginSlice';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localstorage';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button } from 'shared/ui';
import { ButtonVariants } from 'shared/ui/Button/Button';
import classes from './Navbar.module.scss';

interface NavBarProps {
  className?: string;
}

export const Navbar = ({ className }: NavBarProps) => {
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

  return (
    <nav className={classNames(classes.navbar, {}, [className])}>
      {authData ? (
        <Button
          className={classes.links}
          variant={ButtonVariants.OUTLINED_INVERTED}
          onClick={onLogout}
        >
          {t('Log out')}
        </Button>
      ) : (
        <Button
          className={classes.links}
          variant={ButtonVariants.OUTLINED_INVERTED}
          onClick={onModalOpen}
        >
          {t('Log in')}
        </Button>
      )}

      <LoginModal isOpened={isLoginModalOpened} onClose={onModalClose} />
    </nav>
  );
};
