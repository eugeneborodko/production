import { FC, useEffect } from 'react';
import { Modal } from 'shared/ui';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  isOpened: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({
  isOpened,
  onClose,
}) => {
  const authData = useSelector(getUserAuthData);
  useEffect(() => {
    if (authData) {
      onClose();
    }
  }, [authData, onClose]);

  return (
    <Modal
      isOpened={isOpened}
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  );
};
