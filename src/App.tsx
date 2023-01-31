import { Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import { useTheme } from './theme/useTheme'
import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Link to="/">Main page</Link>
      <Link to="/about">About page</Link>
      <button onClick={toggleTheme}>Change theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageLazy />} />
          <Route path="/" element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
