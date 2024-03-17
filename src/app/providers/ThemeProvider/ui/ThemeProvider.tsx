import {
  useState, useMemo, ReactNode, useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';
import { getJsonSettings } from '@/entities/User';
import { Theme } from '@/shared/consts/theme';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const ThemeProvider = ({ initialTheme, children }: ThemeProviderProps) => {
  const defaultTheme = useSelector(getJsonSettings).theme;
  const [theme, setTheme] = useState<Theme>(
    initialTheme || defaultTheme || Theme.LIGHT,
  );
  const [isThemeInited, setIsThemeInited] = useState(false);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme);
      setIsThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
