import { CSSProperties, FC, useMemo } from 'react';
import { Skeleton } from '../../deprecated/Skeleton';
import { AppImage } from '../AppImage';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  size?: number;
  src: string;
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
    <AppImage
      className={classNames(classes.avatar, {}, [className])}
      style={styles}
      src={src}
      alt={alt}
      fallback={<Skeleton width={size} height={size} borderRadius="50%" />}
      errorFallback={<h2>...</h2>} // TODO: add fallback image
    />
  );
};
