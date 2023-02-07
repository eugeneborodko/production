import { FC } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { Theme, ThemeIconColors } from 'app/providers/ThemeProvider'
import Svg from 'shared/assets/icons/theme.svg'
import { Button, ButtonVariants } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
  const { theme, toggleTheme } = useTheme()

  const themeIconColor =
    theme === Theme.LIGHT ? ThemeIconColors.YELLOW : ThemeIconColors.BLUE

  return (
    <>
      <Button variant={ButtonVariants.ICON} onClick={toggleTheme}>
        <Svg fill={themeIconColor} />
      </Button>
    </>
  )
}
