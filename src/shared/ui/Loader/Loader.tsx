import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import LoaderIcon from '../../assets/icons/loader.svg';

interface LoaderProps {
  className?: string
}

export const Loader = memo(({ className }: LoaderProps) => (
  <div className={classNames('', {}, [className])}>
    <LoaderIcon />
  </div>
));
