import { FC, Suspense } from 'react';
import { Loader, Modal } from 'shared/ui';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

interface LoginModalProps {
  isOpened: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ isOpened, onClose }) => (
  <Modal isOpened={isOpened} onClose={onClose}>
    <Suspense fallback={<Loader />}>
      <LoginFormLazy onSuccess={onClose} />
    </Suspense>
  </Modal>
);
