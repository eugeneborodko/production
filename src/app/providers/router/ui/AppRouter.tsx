import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from '../model/routeConfig'

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeConfig.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}

export default AppRouter
