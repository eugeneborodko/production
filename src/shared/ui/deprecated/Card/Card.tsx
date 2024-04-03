import { FC, HTMLAttributes, ReactNode } from 'react';
import { Modes, classNames } from '@/shared/lib/classNames/classNames';
import classes from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
}

/**
 * @deprecated
 */

export const Card: FC<CardProps> = ({
  className, children, fullWidth, ...props
}) => {
  const modes: Modes = {
    [classes.fullWidth]: fullWidth,
  };
  return (
    <div {...props} className={classNames(classes.card, modes, [className])}>
      {children}
    </div>
  );
};
