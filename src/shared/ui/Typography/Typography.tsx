import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { getDate } from '../../lib/helpers/getDate';
import classes from './Typography.module.scss';

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
  SMALL = 'sizeSmall',
  MEDIUM = 'sizeMedium',
  LARGE = 'sizeLarge',
}

type HeadingLevel = 'h1' | 'h2' | 'h3';
type TextTag = 'p' | 'q'; // TODO: add semantic tags

interface TypographyProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TypographyVariants;
  align?: TextAlign;
  size?: TextSize;
  date?: string;
  TitleTag?: HeadingLevel;
  TextTag?: TextTag;
  'data-testid'?: string;
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
    TitleTag = 'h2',
    TextTag = 'p',
    'data-testid': dataTestId = '',
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
        <TitleTag
          className={classNames(classes.title, {}, [className])}
          // @ts-ignore
          data-testid={`${dataTestId}.Title`}
        >
          {title}
        </TitleTag>
      )}
      {text && (
        <TextTag
          className={classes.text}
          // @ts-ignore
          data-testid={`${dataTestId}.Text`}
        >
          {text}
        </TextTag>
      )}
      {date && (
        <time className={classes.text} dateTime={getDate(date)}>
          {date}
        </time>
      )}
    </div>
  ),
);
