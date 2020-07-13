import React, { lazy } from 'react'
import { Redirect } from 'react-router-dom'
import { routesPath } from './constants'
import { DefaultLayout } from './layouts'

const routes = [
  // {
  //   path: '/errors',
  //   component: ErrorLayout,
  //   routes: [
  //     {
  //       path: '/errors/error-401',
  //       exact: true,
  //       component: lazy(() => import('views/error-401'))
  //     },
  //     {
  //       path: '/errors/error-404',
  //       exact: true,
  //       component: lazy(() => import('views/error-404'))
  //     },
  //     {
  //       path: '/errors/error-500',
  //       exact: true,
  //       component: lazy(() => import('views/error-500'))
  //     },
  //     {
  //       component: () => <Redirect to="/errors/error-404" />
  //     }
  //   ]
  // },
  {
    route: '*',
    component: DefaultLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: () => <Redirect to={routesPath.HOME} />
      },
      {
        path: routesPath.HOME,
        exact: true,
        component: lazy(() => import('views/home'))
      }
    ]
  }
]

export default routes
