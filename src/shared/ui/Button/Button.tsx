import { ButtonHTMLAttributes, memo } from 'react';
import { Modes, classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export enum ButtonVariants {
  TEXT = 'text',
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  OUTLINED_INVERTED = 'outlinedInverted',
  OUTLINED_RED = 'outlinedRed',
  OUTLINED_GREEN = 'outlinedGreen',
  ICON = 'icon',
}

export enum ButtonSizes {
  M = 'M',
  L = 'L',
  XL = 'XL',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariants;
  square?: boolean;
  size?: ButtonSizes;
}

export const Button = memo(({
  className,
  variant = ButtonVariants.CONTAINED,
  square,
  size = ButtonSizes.M,
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
});
