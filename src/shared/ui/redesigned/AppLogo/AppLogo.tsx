import { FC } from 'react';
import { Icon } from '../Icon';
import { HStack } from '../Stack';
import AppLogoIcon from '@/shared/assets/icons/star.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo: FC<AppLogoProps> = ({ className, size = 50 }) => (
  <HStack className={classNames('', {}, [className])} justify="center">
    <Icon Svg={AppLogoIcon} width={size} height={size} />
  </HStack>
);
