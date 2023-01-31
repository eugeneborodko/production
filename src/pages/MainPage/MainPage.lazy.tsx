import { lazy } from 'react'

export const MainPageLazy = lazy(() => new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import('./MainPage')), 1500) // TODO: remove this delay
}))