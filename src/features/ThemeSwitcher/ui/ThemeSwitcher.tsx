import { FC } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import User from 'shared/assets/icons/user.png'
import Svg from 'shared/assets/icons/theme.svg'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
  const { toggleTheme } = useTheme()

  return (
    <>
      <img src={User} />
      <img src={Svg} />
      <button onClick={toggleTheme}>toggle theme</button>
    </>
  )
}
