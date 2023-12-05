import { memo } from 'react';
import { Button, ButtonVariants } from '@/shared/ui/Button';
import Svg from '@/shared/assets/icons/theme.svg';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Theme, ThemeIconColors } from '@/shared/consts/theme';

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
