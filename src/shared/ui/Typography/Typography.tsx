import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Typography.module.scss';

export enum TypographyVariants {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center'
}

interface TypographyProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TypographyVariants;
  align?: TextAlign;
}

export const Typography = memo(({
  className,
  title,
  text,
  variant = TypographyVariants.PRIMARY,
  align = TextAlign.LEFT,
}: TypographyProps) => (
  <div
    className={classNames(classes.typography, {}, [
      className,
      classes[variant],
      classes[align],
    ])}
  >
    {title && (
      <p className={classNames(classes.title, {}, [className])}>{title}</p>
    )}
    {text && <p className={classes.text}>{text}</p>}
  </div>
));
