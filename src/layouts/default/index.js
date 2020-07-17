import React, { Suspense } from 'react'
import { Box, makeStyles, LinearProgress } from '@material-ui/core'
import { renderRoutes } from 'react-router-config'
import { useRouter } from 'hooks'
import { sessionManager } from 'utils'
import { palette, routesPath } from 'constants.js'

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    background: palette.light,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    minHeight: '100vh'
  }
})

const DefaultLayout = props => {
  const { route } = props

  const classes = useStyles()

  const { history } = useRouter()

  const { isLoggedIn } = sessionManager

  if (!isLoggedIn) {
    sessionManager.logout()

    history.push(routesPath.LOGIN)

    window.location.reload()
  }

  return (
    <Box className={classes.root}>
      <Suspense fallback={<LinearProgress />}>
        {renderRoutes(route.routes)}
      </Suspense>
    </Box>
  )
}

export default DefaultLayout
