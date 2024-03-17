import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getJsonSettings, saveJsonSettings } from '@/entities/User';
import Svg from '@/shared/assets/icons/theme.svg';
import { Theme, ThemeIconColors } from '@/shared/consts/theme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button, ButtonVariants } from '@/shared/ui/Button';

interface ThemeSwitcherProps {
  themeColor?: string;
}

export const ThemeSwitcher = memo(({ themeColor }: ThemeSwitcherProps) => {
  const themeFromJsonSettings = useSelector(getJsonSettings).theme || Theme.LIGHT;
  const { theme, toggleTheme } = useTheme(themeFromJsonSettings);
  const dispatch = useAppDispatch();

  const onToggleTheme = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  const themeIconColor = theme === Theme.LIGHT ? ThemeIconColors.YELLOW : ThemeIconColors.BLUE;

  return (
    <Button variant={ButtonVariants.ICON} onClick={onToggleTheme}>
      <Svg fill={themeColor || themeIconColor} />
    </Button>
  );
});
