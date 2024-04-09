import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getJsonSettings, saveJsonSettings } from '@/entities/User';
import ThemeIcon from '@/shared/assets/icons/theme-new.svg';
import { Theme } from '@/shared/consts/theme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Icon } from '@/shared/ui/redesigned';
import classes from './ThemeSwitcher.module.scss';

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
    <Icon
      className={classes.themeSwitcherIcon}
      Svg={ThemeIcon}
      clickable
      onClick={onToggleTheme}
    />
  );
});
