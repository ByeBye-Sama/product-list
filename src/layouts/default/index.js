import React, { Suspense } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { renderRoutes } from 'react-router-config'

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    background: 'lightGray',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center'
  }
})

const DefaultLayout = props => {
  const { route } = props

  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box>Layout</Box>
      <Suspense fallback="loading...">{renderRoutes(route.routes)}</Suspense>
    </Box>
  )
}

export default DefaultLayout
