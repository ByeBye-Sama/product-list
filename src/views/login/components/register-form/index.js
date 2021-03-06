import React from 'react'
import { get, pick } from 'lodash'
import { makeStyles } from '@material-ui/core'
import { Form, Field } from 'react-final-form'
import { TextField } from 'final-form-material-ui'
import { useRouter } from 'hooks'
import { Button } from 'components'
import { sessionManager, getValidator, formConstraints } from 'utils'
import { routesPath } from 'constants.js'
import { signUp } from '../../services'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',

    '& >:not(:last-child)': {
      marginBottom: theme.spacing(3)
    },

    '& >:last-child': {
      marginTop: theme.spacing(3)
    }
  }
}))

const RegisterForm = () => {
  const classes = useStyles()

  const { history } = useRouter()

  const fieldNames = ['name', 'email', 'password', 'c_password']

  const formValidator = getValidator(pick(formConstraints, fieldNames))

  const onSubmit = async values => {
    const response = await signUp(values)

    if (get(response, 'status') === 200) {
      sessionManager.login(response.data.data)

      await history.push(routesPath.HOME)

      window.location.reload()
    }
  }

  return (
    <>
      <Form onSubmit={onSubmit} validate={formValidator}>
        {formProps => {
          const { handleSubmit, submitting, pristine } = formProps

          return (
            <form className={classes.root} onSubmit={handleSubmit}>
              <Field
                component={TextField}
                fullWidth
                label="Fullname"
                name="name"
                type="text"
                variant="outlined"
              />
              <Field
                component={TextField}
                fullWidth
                label="Email"
                name="email"
                type="email"
                variant="outlined"
              />
              <Field
                component={TextField}
                fullWidth
                label="Password"
                name="password"
                type="password"
                variant="outlined"
              />
              <Field
                component={TextField}
                fullWidth
                label="Confirm Password"
                name="c_password"
                type="password"
                variant="outlined"
              />
              <Button
                color="primary"
                fullWidth
                disabled={pristine || submitting}
                loading={submitting}
                size="large"
                type="submit"
                variant="contained"
              >
                Sign up
              </Button>
            </form>
          )
        }}
      </Form>
    </>
  )
}

export default RegisterForm
