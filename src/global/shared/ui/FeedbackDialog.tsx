import React from "react";
import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
  Box
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface FeedbackDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  actions: JSX.Element;
  dividers?: boolean;
}

const FeedbackDialog: React.FC<FeedbackDialogProps> = (props) => {
  const { open, onClose, title, actions, dividers, children } = props;

  return (
    <Dialog open={open}>
      <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
        {title}
        <Box sx={{ ml: "auto" }}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers={dividers}>{children}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};

export default FeedbackDialog;
