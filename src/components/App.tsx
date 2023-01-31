import { Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AboutPageLazy } from '../pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from '../pages/MainPage/MainPage.lazy'
import './index.scss'

const App = () => {
  return (
    <div className="app">
      <Link to="/">Main page</Link>
      <Link to="/about">About page</Link>
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
