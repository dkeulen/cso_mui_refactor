import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions
} from "@mui/material";
import React from "react";

const ConfirmationDialog = ({
  onClose,
  open,
  title,
  text,
  confirmButtonText
}) => (
  <Dialog draggable onClose={onClose} open={open}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{text}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button variant="text" onClick={onClose}>
        Cancel
      </Button>
      <Button variant="contained" color="primary">
        {confirmButtonText || "Confirm"}
      </Button>
    </DialogActions>
  </Dialog>
);

export default ConfirmationDialog;
