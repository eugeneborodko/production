import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import LoaderIcon from '../../assets/icons/loader.svg';

interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={classNames('', {}, [className])}>
    <LoaderIcon />
  </div>
);
