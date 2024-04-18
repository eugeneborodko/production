import { ButtonHTMLAttributes } from 'react';
import { Modes, classNames } from '@/shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export type ButtonVariant = 'empty' | 'outlined' | 'contained';
export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
}

export const Button = ({
  className,
  variant = 'outlined',
  square,
  size = 'm',
  children,
  ...props
}: ButtonProps) => {
  const modes: Modes = {
    [classes.square]: square,
  };

  const additionalClasses = [className, classes[variant], classes[size]];

  return (
    <button
      {...props}
      className={classNames(classes.button, modes, additionalClasses)}
      type="button"
    >
      {children}
    </button>
  );
};
