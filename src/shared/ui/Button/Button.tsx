import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Button.module.scss'

export enum ButtonVariants {
  TEXT = 'text',
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  ICON = 'icon',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant: ButtonVariants
}

export const Button: FC<ButtonProps> = ({
  className,
  variant,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(classes.button, {}, [className, classes[variant]])}
      type="button"
    >
      {children}
    </button>
  )
}
