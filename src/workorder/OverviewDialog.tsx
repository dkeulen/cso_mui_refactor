import React from "react";
import {
  Button,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  Paper,
  List,
  ListItem,
  ListItemSecondaryAction,
  Typography,
  IconButton,
  Box,
  Tooltip
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";
import FeedbackDialog from "../global/shared/FeedbackDialog";

interface OverviewDialogProps {
  onClose: () => void;
  open: boolean;
  actionOne?: () => void;
  actionTwo?: () => void;
}

interface Line {
  title: string;
  price: number;
  divider?: boolean;
}

const OverviewDialog: React.FC<OverviewDialogProps> = (props) => {
  const { onClose, open, actionTwo } = props;
  const [feedbackModalOpen, setFeedbackModalOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const lines: Line[] = [
    { title: "Products", price: 0.0 },
    { title: "Labour", price: 210.0 },
    { title: "Other", price: 0.0 },
    { title: "Discount", price: 0.0, divider: true },
    { title: "Total ex.", price: 0.0 },
    { title: "Total ex.", price: 210.0 },
    { title: "Total VAT", price: 42.0, divider: true },
    { title: "Total inc. VAT", price: 252.0 }
  ];

  const handleQuickOrder = () => {
    onClose();
    setFeedbackModalOpen(true);
  };

  const handleCompleteQuickOrder = () => {
    setFeedbackModalOpen(false);
    enqueueSnackbar(`Your parts have been ordered`, {
      variant: "success"
    });
  };

  const handleFeedbackCancel = () => {
    setFeedbackModalOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
          Order list
          <Box sx={{ ml: "auto" }}>
            <Tooltip title="Remove all lines from order">
              <IconButton>
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers sx={{ minWidth: 400 }}>
          <Typography variant="h6">Approved lines</Typography>
          <List dense>
            {lines.map((line, index) => {
              return (
                <ListItem key={index} divider={line.divider}>
                  {line.title}
                  <ListItemSecondaryAction>
                    &euro; {line.price}
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
          <Typography variant="h6">All lines</Typography>
          <Paper variant="outlined">
            <List dense>
              <ListItem>
                Total ex.
                <ListItemSecondaryAction>&euro; 280.00</ListItemSecondaryAction>
              </ListItem>
              <ListItem divider>
                Total VAT
                <ListItemSecondaryAction>&euro; 56.00</ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                Total inc. VAT
                <ListItemSecondaryAction>&euro; 336.00</ListItemSecondaryAction>
              </ListItem>
            </List>
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={actionTwo}>
            Order
          </Button>
          <Button variant="contained" onClick={handleQuickOrder}>
            Quick order
          </Button>
        </DialogActions>
      </Dialog>
      <FeedbackDialog
        open={feedbackModalOpen}
        title="Confirm order"
        onClose={handleFeedbackCancel}
        actions={
          <>
            <Button variant="outlined" onClick={handleFeedbackCancel}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleCompleteQuickOrder}
            >
              Confirm
            </Button>
          </>
        }
      >
        <p>
          Your order will be placed and by default will be delivered to the
          shops address.
        </p>
      </FeedbackDialog>
    </>
  );
};

export default OverviewDialog;
