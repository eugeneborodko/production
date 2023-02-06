import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { RouteProps } from 'react-router-dom'
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig'

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
]
