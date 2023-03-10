import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, Modal } from 'shared/ui';
import { ButtonVariants } from 'shared/ui/Button/Button';
import classes from './Navbar.module.scss';

interface NavBarProps {
  className?: string;
}

export const Navbar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [isLoginModalOpened, setIsLoginModalOpened] = useState<boolean>(false);

  const onModalClose = useCallback(() => {
    setIsLoginModalOpened(false);
  }, []);

  const onModalOpen = useCallback(() => {
    setIsLoginModalOpened(true);
  }, []);

  return (
    <nav className={classNames(classes.navbar, {}, [className])}>
      <Button
        className={classes.links}
        variant={ButtonVariants.OUTLINED_INVERTED}
        onClick={onModalOpen}
      >
        {t('Log in')}
      </Button>
      <LoginModal isOpened={isLoginModalOpened} onClose={onModalClose} />
    </nav>
  );
};
