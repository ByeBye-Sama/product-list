import React from 'react'
import { InputAdornment, makeStyles, Box } from '@material-ui/core'
import { Field } from 'react-final-form'
import { TextField } from 'final-form-material-ui'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    padding: theme.spacing(3)
  },
  form: {
    marginBottom: theme.spacing(3),
    width: '100%',

    '& >:not(:last-child)': {
      marginBottom: theme.spacing(2.5)
    }
  },
  numberField: `
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `
}))

const ProductForm = () => {
  const classes = useStyles()

  return (
    <Box className={classes.form}>
      <Field
        fullWidth
        component={TextField}
        name="name"
        label="Name"
        variant="outlined"
        type="text"
        InputProps={{
          inputProps: { maxLength: 255 }
        }}
      />
      <Field
        fullWidth
        component={TextField}
        name="description"
        multiline
        rows={3}
        label="Description"
        variant="outlined"
        type="text"
        InputProps={{
          inputProps: { maxLength: 255 }
        }}
      />
      <Field
        fullWidth
        component={TextField}
        name="category"
        label="Category"
        variant="outlined"
        type="text"
        InputProps={{
          inputProps: { maxLength: 255 }
        }}
      />
      <Field
        fullWidth
        autoComplete="off"
        className={classes.numberField}
        component={TextField}
        name="price"
        label="Price"
        variant="outlined"
        type="number"
        InputProps={{
          inputProps: { maxLength: 18 },
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
      />
    </Box>
  )
}

export default ProductForm
