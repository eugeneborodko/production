import { CSSProperties, FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  width: string | number;
  height: string | number;
  borderRadius?: string;
}

export const Skeleton: FC<SkeletonProps> = ({
  className, width, height, borderRadius,
}) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return (
    <div
      className={classNames(cls.skeleton, {}, [className])}
      style={styles}
    />
  );
};
