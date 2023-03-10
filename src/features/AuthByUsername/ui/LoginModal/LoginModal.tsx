import { FC } from 'react';
import { Modal } from 'shared/ui';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  isOpened: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({
  isOpened,
  onClose,
}) => (
  <Modal
    isOpened={isOpened}
    onClose={onClose}
  >
    <LoginForm />
  </Modal>
);
