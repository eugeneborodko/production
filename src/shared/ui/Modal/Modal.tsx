import {
  FC,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
} from 'react';
import { Portal } from '../Portal/Portal';
import { Modes, classNames } from '@/shared/lib/classNames/classNames';
import classes from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpened?: boolean;
  onClose?: () => void;
}

// TODO: use React.KeyboardEvent instead
interface KeyboardEvent {
  key: string;
}

export const Modal: FC<ModalProps> = ({
  isOpened,
  onClose,
  className,
  children,
}) => {
  const onModalClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onContentClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onModalClose();
      }
    },
    [onModalClose],
  );

  const modes: Modes = {
    [classes.opened]: isOpened,
  };

  useEffect(() => {
    if (isOpened) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpened, onKeyDown]);

  if (!isOpened) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(classes.modal, modes, [className])}>
        <div className={classes.overlay} onClick={onModalClose}>
          <div className={classes.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
