import { FC, Suspense, useEffect } from 'react';
import { Loader, Modal } from 'shared/ui';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

interface LoginModalProps {
  isOpened: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ isOpened, onClose }) => {
  const authData = useSelector(getUserAuthData);
  useEffect(() => {
    if (authData) {
      onClose();
    }
  }, [authData, onClose]);

  return (
    <Modal isOpened={isOpened} onClose={onClose}>
      <Suspense fallback={Loader}>
        <LoginFormLazy />
      </Suspense>
    </Modal>
  );
};
