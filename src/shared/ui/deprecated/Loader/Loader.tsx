import { memo } from 'react';
import LoaderIcon from '../../../assets/icons/loader.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
  className?: string
}

/**
 * @deprecated
 */

export const Loader = memo(({ className }: LoaderProps) => (
  <div className={classNames('', {}, [className])}>
    <LoaderIcon />
  </div>
));
