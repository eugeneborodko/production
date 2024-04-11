import { FC, HTMLAttributes, ReactNode } from 'react';
import { Modes, classNames } from '@/shared/lib/classNames/classNames';
import classes from './Card.module.scss';

type CardPadding = '0' | '8' | '16' | '24';
type CardBorder = 'round' | 'normal';

const mapPaddingToClass: Record<CardPadding, string> = {
  0: 'gap_0',
  8: 'gap_8',
  16: 'gap_16',
  24: 'gap_24',
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
}

export const Card: FC<CardProps> = ({
  className,
  children,
  fullWidth,
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
      className={classNames(classes.card, modes, [
        className,
        classes[paddingClassName],
        classes[border],
      ])}
    >
      {children}
    </div>
  );
};
