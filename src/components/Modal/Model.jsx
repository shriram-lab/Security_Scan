import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




export default function Modal(props) {
  const {openModal,handleCloseModal} = props;
  return (
    <div>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseModal} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}