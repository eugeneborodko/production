import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { TFunction } from 'react-i18next';
import classes from './Typography.module.scss';
import { getDate } from '../../lib/helpers/getDate';

export enum TypographyVariants {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export enum TextSize {
  MEDIUM = 'sizeMedium',
  LARGE = 'sizeLarge',
}

interface TypographyProps {
  className?: string;
  title?: string;
  text?: string | TFunction;
  variant?: TypographyVariants;
  align?: TextAlign;
  size?: TextSize,
  date?: string;
}

export const Typography = memo(
  ({
    className,
    title,
    text,
    variant = TypographyVariants.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.MEDIUM,
    date,
  }: TypographyProps) => (
    <div
      className={classNames(classes.typography, {}, [
        className,
        classes[variant],
        classes[align],
        classes[size],
      ])}
    >
      {title && (
        <p className={classNames(classes.title, {}, [className])}>{title}</p>
      )}
      {text && <p className={classes.text}>{text}</p>}
      {date && (
        <time className={classes.text} dateTime={getDate(date)}>
          {date}
        </time>
      )}
    </div>
  ),
);
