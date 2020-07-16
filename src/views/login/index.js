import React, { useState } from 'react'
import { Box, makeStyles, Typography, Button } from '@material-ui/core'
import { LoginForm, RegisterForm } from './components'

const useStyles = makeStyles(theme => ({
  root: {
    backdropFilter: 'blur(10px)',
    background: 'rgba(255,255,255, 0.3)',
    borderRadius: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(3),
    padding: theme.spacing(5, 3, 3)
  },
  title: {
    marginBottom: theme.spacing(1)
  },
  label: {
    marginBottom: theme.spacing(5)
  }
}))

const getContent = hasAccount => {
  if (!hasAccount) {
    return {
      label: 'Do you already have an account?',
      buttonLabel: 'Sign in',
      component: <RegisterForm />
    }
  }

  return {
    label: `You don't have an account yet?`,
    buttonLabel: 'Sign up',
    component: <LoginForm />
  }
}

const LoginScreen = () => {
  const classes = useStyles()

  const [hasAccount, setHasAccount] = useState(true)

  const content = getContent(hasAccount)

  return (
    <Box className={classes.root}>
      <Typography variant="h5" color="primary" className={classes.title}>
        Welcome, to continue login or register.
      </Typography>
      <Typography variant="h6" className={classes.label}>
        {content.label}
        <Button
          color="secondary"
          size="large"
          onClick={() => setHasAccount(!hasAccount)}
        >
          {content.buttonLabel}
        </Button>
      </Typography>
      {content.component}
    </Box>
  )
}

export default LoginScreen
