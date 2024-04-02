import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon = memo(
  ({
    className, Svg, inverted, ...props
  }: IconProps) => (
    <Svg
      className={classNames(inverted ? classes.inverted : classes.Icon, {}, [
        className,
      ])}
      {...props}
    />
  ),
);
