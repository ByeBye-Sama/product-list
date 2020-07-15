import React from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'
import { Button } from 'components'

const DeleteModal = props => {
  const { isOpen, onClose, onConfirm, loading, type, title } = props

  return (
    <Dialog fullWidth maxWidth="xs" onClose={onClose} open={isOpen}>
      <DialogTitle>{`Eliminar ${title}`}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`¿Deseas eliminar ${type}?`}
          <br />
          Los datos no podrán ser recuperados
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          CANCELAR
        </Button>
        <Button
          autoFocus
          color="secondary"
          loading={loading}
          onClick={async () => {
            await onConfirm()

            onClose()
          }}
          variant="contained"
        >
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteModal
