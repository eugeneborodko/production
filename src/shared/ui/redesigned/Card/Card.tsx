import { FC, HTMLAttributes, ReactNode } from 'react';
import { Modes, classNames } from '@/shared/lib/classNames/classNames';
import classes from './Card.module.scss';

type CardPadding = '0' | '8' | '16' | '24';

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
}

export const Card: FC<CardProps> = ({
  className,
  children,
  fullWidth,
  padding = '0',
  ...props
}) => {
  const paddingClassName = mapPaddingToClass[padding];
  const modes: Modes = {
    [classes.fullWidth]: fullWidth,
  };
  return (
    <div
      {...props}
      className={classNames(classes.card, modes, [className, classes[paddingClassName]])}
    >
      {children}
    </div>
  );
};
