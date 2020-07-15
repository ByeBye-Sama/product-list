import React from 'react'
import { InputAdornment, makeStyles } from '@material-ui/core'
import { Field } from 'react-final-form'
import { TextField } from 'final-form-material-ui'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    padding: theme.spacing(3)
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
    <>
      <Field
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
    </>
  )
}

export default ProductForm
