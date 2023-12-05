import { memo } from 'react';

import Svg from '@/shared/assets/icons/theme.svg';
import { Theme, ThemeIconColors } from '@/shared/consts/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button, ButtonVariants } from '@/shared/ui/Button';

interface ThemeSwitcherProps {
  themeColor?: string;
}

export const ThemeSwitcher = memo(({ themeColor }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  const themeIconColor = theme === Theme.LIGHT ? ThemeIconColors.YELLOW : ThemeIconColors.BLUE;

  return (
    <Button variant={ButtonVariants.ICON} onClick={toggleTheme}>
      <Svg fill={themeColor || themeIconColor} />
    </Button>
  );
});
