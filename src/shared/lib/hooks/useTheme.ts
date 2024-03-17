import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Theme } from '@/shared/consts/theme';

interface useThemeResult {
  toggleTheme: (saveAction: (theme: Theme) => void) => void;
  theme: Theme;
}

export const useTheme = (defaultTheme: Theme): useThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);
  document.body.className = defaultTheme;

  const toggleTheme = (saveAction: (theme: Theme) => void) => {
    switch (theme) {
    case Theme.LIGHT:
      defaultTheme = Theme.DARK;
      break;
    case Theme.DARK:
      defaultTheme = Theme.ORANGE;
      break;
    case Theme.ORANGE:
      defaultTheme = Theme.LIGHT;
      break;
    default:
      defaultTheme = Theme.LIGHT;
    }

    setTheme?.(defaultTheme);
    saveAction?.(defaultTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};
