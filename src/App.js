import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { CssBaseline } from '@material-ui/core'
import { renderRoutes } from 'react-router-config'

import routes from './routes'

const history = createBrowserHistory()

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router history={history}>{renderRoutes(routes)}</Router>
    </>
  )
}

export default App
