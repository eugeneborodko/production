import { CSSProperties, FC, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import classes from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  size?: number;
  src?: string;
  alt?: string;
}

export const Avatar: FC<AvatarProps> = ({
  className,
  size = 100,
  src,
  alt,
}) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  return (
    <img
      className={classNames(classes.avatar, {}, [className])}
      style={styles}
      src={src}
      alt={alt}
    />
  );
};
