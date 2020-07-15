import React from 'react'
import { Box, makeStyles, Typography, IconButton } from '@material-ui/core'
import AddBoxIcon from '@material-ui/icons/AddBox'

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    background: `linear-gradient(to right, #355c7d, #6c5b7b, #c06c84)`,
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

  return (
    <Box boxShadow={6} className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Product CRUD
      </Typography>
      <IconButton edge="end" onClick={onCreate}>
        <AddBoxIcon fontSize="large" className={classes.title} />
      </IconButton>
    </Box>
  )
}

export default Header
