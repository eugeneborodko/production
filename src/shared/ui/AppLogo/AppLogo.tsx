import { FC } from 'react';
import { HStack } from '../Stack';
import AppLogoIcon from '@/shared/assets/icons/star.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
  className?: string;
}

export const AppLogo: FC<AppLogoProps> = ({ className }) => (
  <HStack
    className={classNames('', {}, [className])}
    justify="center"
  >
    <AppLogoIcon />
  </HStack>
);
