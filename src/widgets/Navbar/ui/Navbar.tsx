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
  const [isAuthModalOpened, setIsAuthModalOpened] = useState<boolean>(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModalOpened((prev) => !prev);
  }, []);

  return (
    <nav className={classNames(classes.navbar, {}, [className])}>
      <Button
        className={classes.links}
        variant={ButtonVariants.OUTLINED_INVERTED}
        onClick={onToggleModal}
      >
        {t('Log in')}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpened={isAuthModalOpened} onClose={onToggleModal}>
        123
      </Modal>
    </nav>
  );
};
