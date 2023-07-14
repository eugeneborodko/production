import { FC, HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ className, children, ...props }) => (
  <div {...props} className={classNames(classes.card, {}, [className])}>
    {children}
  </div>
);
