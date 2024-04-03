import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getJsonSettings, saveJsonSettings } from '@/entities/User';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { Theme } from '@/shared/consts/theme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Icon } from '@/shared/ui/deprecated';
import { Button, ButtonVariants } from '@/shared/ui/deprecated/Button';

export const ThemeSwitcher = memo(() => {
  const themeFromJsonSettings = useSelector(getJsonSettings).theme || Theme.LIGHT;
  const { toggleTheme } = useTheme(themeFromJsonSettings);
  const dispatch = useAppDispatch();

  const onToggleTheme = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <Button variant={ButtonVariants.ICON} onClick={onToggleTheme}>
      <Icon Svg={ThemeIcon} width="40" height="40" inverted />
    </Button>
  );
});
