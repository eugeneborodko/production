import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui';
import { LoginForm } from '../LoginForm/LoginForm';
import classes from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpened: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({
  className,
  isOpened,
  onClose,
}) => (
  <Modal
    className={classNames(classes.loginModal, {}, [className])}
    isOpened={isOpened}
    onClose={onClose}
  >
    <LoginForm />
  </Modal>
);
