import { lazy } from 'react'

export const AboutPageLazy = lazy(() => new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import('./AboutPage')), 1500) // TODO: remove this delay
}))