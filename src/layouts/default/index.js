import React, { Suspense } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { renderRoutes } from 'react-router-config'
import { palette } from 'constants.js'

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

  return (
    <Box className={classes.root}>
      <Suspense fallback="loading...">{renderRoutes(route.routes)}</Suspense>
    </Box>
  )
}

export default DefaultLayout
