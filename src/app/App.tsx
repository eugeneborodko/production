import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <AppRouter />
      <Navbar />
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  )
}

export default App
