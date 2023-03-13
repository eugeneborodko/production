import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Typography.module.scss';

export enum TypographyVariants {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TypographyProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TypographyVariants;
}

export const Typography: FC<TypographyProps> = ({
  className,
  title,
  text,
  variant = TypographyVariants.PRIMARY,
}) => (
  <div
    className={classNames(classes.typography, {}, [
      className,
      classes[variant],
    ])}
  >
    {title && (
      <p className={classNames(classes.title, {}, [className])}>{title}</p>
    )}
    {text && <p className={classes.text}>{text}</p>}
  </div>
);
