import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Buttons from '../Button';

export default function Modal(props) {
  const {openModal,handleCloseModal,Heading,children} = props;
  return (
    <div>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="draggable-dialog-title"
        fullWidth
      >
        <DialogTitle style={{ cursor: 'move' }}>
          {Heading}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Buttons autoFocus onClick={handleCloseModal} color="secondary">
            Cancel
          </Buttons>
          <Buttons onClick={handleCloseModal} color="primary">
            Add
          </Buttons>
        </DialogActions>
      </Dialog>
    </div>
  );
}