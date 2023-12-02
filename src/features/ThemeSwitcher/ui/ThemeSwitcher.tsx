import { memo } from 'react';
import { useTheme, Theme, ThemeIconColors } from '@/app/providers/ThemeProvider';
import { Button, ButtonVariants } from '@/shared/ui/Button/Button';
import Svg from '@/shared/assets/icons/theme.svg';

interface ThemeSwitcherProps {
  themeColor?: string;
}

export const ThemeSwitcher = memo(({ themeColor }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  const themeIconColor = theme === Theme.LIGHT
    ? ThemeIconColors.YELLOW
    : ThemeIconColors.BLUE;

  return (
    <Button variant={ButtonVariants.ICON} onClick={toggleTheme}>
      <Svg fill={themeColor || themeIconColor} />
    </Button>
  );
});
