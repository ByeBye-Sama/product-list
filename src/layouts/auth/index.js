import React, { Suspense } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { renderRoutes } from 'react-router-config'
import { palette } from 'constants.js'

const useStyles = makeStyles({
  root: {
    alignItems: 'flex-end',
    backgroundImage: `url('https://res.cloudinary.com/kaypacha/image/upload/v1594920304/monochromatic/stories/avatar2.jpg')`,
    backgroundSize: 'cover',
    background: palette.gradient,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center'
  }
})

const AuthLayout = props => {
  const { route } = props

  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Suspense fallback="loading...">{renderRoutes(route.routes)}</Suspense>
    </Box>
  )
}

export default AuthLayout
