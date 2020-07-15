import React from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles
} from '@material-ui/core'
import { Button } from 'components'
import { palette } from 'constants.js'

const useStyles = makeStyles(theme => ({
  actions: {
    background: palette.light,
    padding: theme.spacing(2)
  }
}))

const DeleteModal = props => {
  const { isOpen, onClose, onConfirm, loading, type, title } = props

  const classes = useStyles()

  return (
    <Dialog fullWidth maxWidth="xs" onClose={onClose} open={isOpen}>
      <DialogTitle>{`Delete ${title}`}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`¿Do you want to remove ${type}?`}
          <br />
          The data cannot be recovered
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button
          color="secondary"
          loading={loading}
          onClick={async () => {
            await onConfirm()

            onClose()
          }}
          variant="contained"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteModal
