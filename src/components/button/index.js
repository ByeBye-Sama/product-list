import React from 'react'
import {
  Box,
  Button as MaterialButton,
  CircularProgress,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: 'relative'
  },
  loader: {
    color: 'black',
    position: 'absolute'
  }
}))

const Button = props => {
  const { loading, disabled, children, loaderColor, ...rest } = props

  const classes = useStyles(props)

  return (
    <MaterialButton
      className={classes.wrapper}
      disabled={disabled || loading}
      {...rest}
    >
      {!loading && children}
      {loading && (
        <>
          <Box style={{ visibility: 'hidden' }}>{children}</Box>
          <CircularProgress
            className={classes.loader}
            color={loaderColor}
            size={24}
          />
        </>
      )}
    </MaterialButton>
  )
}

export default Button
