import React from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles
} from '@material-ui/core'
import { Button } from 'components'
import { palette } from 'constants.js'

const useStyles = makeStyles(theme => ({
  actions: {
    background: palette.light,
    padding: theme.spacing(2)
  },
  content: {
    display: 'flex',
    flexDirection: 'column',

    '& >*': {
      marginBottom: theme.spacing(2.5)
    }
  }
}))

const Content = props => {
  const {
    onSubmit,
    loading,
    disabled,
    isOpen,
    title,
    children,
    onClose,
    actionButtonLabel
  } = props

  const classes = useStyles(props)

  return (
    <Dialog onClose={onClose} open={isOpen} fullWidth maxWidth="xs">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent className={classes.content}>{children}</DialogContent>
      <DialogActions className={classes.actions}>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button
          color="primary"
          type="submit"
          variant="contained"
          loading={loading}
          disabled={disabled}
          onClick={async () => {
            await onSubmit()

            onClose()
          }}
        >
          {actionButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Content
