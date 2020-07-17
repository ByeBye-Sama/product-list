import React from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Box, makeStyles, Typography, IconButton } from '@material-ui/core'
import { useRouter } from 'hooks'
import { sessionManager } from 'utils'
import { palette, routesPath } from 'constants.js'

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    background: palette.gradient,
    display: 'flex',
    height: theme.spacing(8),
    justifyContent: 'space-between',
    padding: theme.spacing(0, 3),
    position: 'fixed',
    top: 0,
    width: '100%'
  },
  title: {
    color: 'white'
  }
}))

const Header = props => {
  const { onCreate } = props

  const classes = useStyles()

  const { history } = useRouter()

  const onLogout = async () => {
    sessionManager.logout()

    await history.push(routesPath.LOGIN)
  }

  return (
    <Box boxShadow={6} className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Product CRUD
      </Typography>
      <IconButton onClick={onCreate}>
        <AddBoxIcon fontSize="large" className={classes.title} />
      </IconButton>
      <IconButton onClick={onLogout} edge="end">
        <ExitToAppIcon fontSize="large" className={classes.title} />
      </IconButton>
    </Box>
  )
}

export default Header
