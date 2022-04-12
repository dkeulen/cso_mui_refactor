import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@mui/material";
import React from "react";

const OptionDialog = ({ onClose, open, dialogOptions }) => (
  <Dialog draggable onClose={onClose} open={open}>
    <DialogTitle sx={{ textAlign: "center" }}>
      {dialogOptions.title}
    </DialogTitle>
    <List sx={{ pt: 0 }}>
      {dialogOptions.options.map((option) => (
        <ListItem button onClick={() => null} key={option.title}>
          <ListItemAvatar sx={{ display: "flex" }}>
            {option.icon}
          </ListItemAvatar>
          <ListItemText primary={option.title} />
        </ListItem>
      ))}
    </List>
  </Dialog>
);

export default OptionDialog;
