import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getJsonSettings, saveJsonSettings } from '@/entities/User';
import ThemeIcon from '@/shared/assets/icons/theme-new.svg';
import ThemeIconDeprecated from '@/shared/assets/icons/theme.svg';
import { Theme } from '@/shared/consts/theme';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated';
import { Button, ButtonVariants } from '@/shared/ui/deprecated/Button';
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
    <ToggleFeature
      feature="isAppRedesigned"
      on={(
        <Icon
          className={classes.themeSwitcherIcon}
          Svg={ThemeIcon}
          clickable
          onClick={onToggleTheme}
        />
      )}
      off={(
        <Button variant={ButtonVariants.ICON} onClick={onToggleTheme}>
          <IconDeprecated
            Svg={ThemeIconDeprecated}
            width="40"
            height="40"
            inverted
          />
        </Button>
      )}
    />
  );
});
