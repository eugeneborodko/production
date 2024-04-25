import { FC, HTMLAttributes, ReactNode } from 'react';
import { Modes, classNames } from '@/shared/lib/classNames/classNames';
import classes from './Card.module.scss';

type CardPadding = '0' | '8' | '16' | '24';
type CardBorder = 'round' | 'normal';
type CardVariant = 'light' | 'dark';

const mapPaddingToClass: Record<CardPadding, string> = {
  0: 'padding_0',
  8: 'padding_8',
  16: 'padding_16',
  24: 'padding_24',
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  fullWidth?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
}

export const Card: FC<CardProps> = ({
  className,
  children,
  variant = 'light',
  fullWidth = true,
  padding = '0',
  border = 'normal',
  ...props
}) => {
  const paddingClassName = mapPaddingToClass[padding];
  const modes: Modes = {
    [classes.fullWidth]: fullWidth,
  };
  return (
    <div
      {...props}
      className={classNames('', modes, [
        className,
        classes[paddingClassName],
        classes[variant],
        classes[border],
      ])}
    >
      {children}
    </div>
  );
};
