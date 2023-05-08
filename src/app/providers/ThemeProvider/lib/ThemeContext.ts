import { createContext } from 'react';

export enum Theme {
  LIGHT = 'lightTheme',
  DARK = 'darkTheme',
  ORANGE = 'orangeTheme'
}

export enum ThemeIconColors {
  YELLOW = 'yellow',
  BLUE = 'blue',
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
