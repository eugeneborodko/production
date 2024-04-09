import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './Typography.module.scss';

type TypographyVariant = 'primary' | 'accent' | 'error';
type TextAlign = 'left' | 'right' | 'center';
type TextSize = 's' | 'm' | 'l';
type HeadingLevel = 'h1' | 'h2' | 'h3';
type TextTag = 'p' | 'q'; // TODO: add semantic tags

interface TypographyProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TypographyVariant;
  align?: TextAlign;
  size?: TextSize;
  TitleTag?: HeadingLevel;
  TextTag?: TextTag;
  'data-testid'?: string;
}

export const Typography = memo(
  ({
    className,
    title,
    text,
    variant = 'primary',
    align = 'left',
    size = 'm',
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
    </div>
  ),
);
