import React from "react";
import {
  Button,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
  Box,
  Tooltip,
  Grid,
  TextField,
  Alert,
  AlertTitle,
  Select,
  SelectChangeEvent,
  MenuItem,
  FormControl,
  InputLabel,
  Fab
} from "@mui/material";
import { Close, ZoomIn } from "@mui/icons-material";
import DatePicker from "@mui/lab/DatePicker";
import FeedbackDialog from "../global/shared/ui/FeedbackDialog";
import { useSnackbar } from "notistack";

interface InvoiceProps {
  open: boolean;
  onClose: () => void;
}

const Invoice: React.FC<InvoiceProps> = (props) => {
  const { open, onClose } = props;
  const [feedBackOpen, setFeedBackOpen] = React.useState<boolean>(false);
  const [invoiceDate, setInvoiceDate] = React.useState<Date | null>(null);
  const [MOTDate, setMOTDate] = React.useState<Date | null>(null);
  const [closingStatement, setClosingStatement] = React.useState("default");
  const { enqueueSnackbar } = useSnackbar();

  const handleClosingStatement = (event: SelectChangeEvent) => {
    setClosingStatement(event.target.value as string);
  };

  const handleFeedBackOpen = () => {
    setFeedBackOpen(true);
  };

  const handleFeedBackClose = () => {
    setFeedBackOpen(false);
  };

  const handleFeedbackConfirm = () => {
    onClose();
    setFeedBackOpen(false);
    enqueueSnackbar(`Invoice completed`, {
      variant: "success"
    });
  };

  return (
    <>
      <Dialog open={open} fullWidth maxWidth="lg">
        <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
          Invoice
          <IconButton onClick={onClose} sx={{ ml: "auto" }}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Box
                sx={{
                  position: "relative",
                  background: "#aaa",
                  height: "100%",
                  minHeight: "80vh"
                }}
              >
                <Fab
                  sx={{
                    position: "absolute",
                    top: ".5em",
                    right: ".5em",
                    zIndex: 9
                  }}
                  size="small"
                >
                  <Tooltip title="Open large preview">
                    <ZoomIn />
                  </Tooltip>
                </Fab>
                preview
              </Box>
            </Grid>
            <Grid item xs={4}>
              <DatePicker
                label="Invoice date"
                value={invoiceDate}
                onChange={(newValue) => {
                  setInvoiceDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    size="small"
                    fullWidth
                    {...params}
                    sx={{ mb: 2 }}
                  />
                )}
              />
              <FormControl fullWidth>
                <InputLabel id="closingStatement-select-label">
                  Closing statement
                </InputLabel>
                <Select
                  labelId="closingStatement-select-label"
                  label="Closing statement"
                  value={closingStatement}
                  onChange={handleClosingStatement}
                  size="small"
                  sx={{ mb: 2 }}
                >
                  <MenuItem value="default">Default closing statement</MenuItem>
                  <MenuItem value="second">second closing statement</MenuItem>
                </Select>
              </FormControl>
              <DatePicker
                label="MOT expiration date"
                value={MOTDate}
                onChange={(newValue) => {
                  setMOTDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    size="small"
                    fullWidth
                    {...params}
                    sx={{ mb: 2 }}
                  />
                )}
              />
              <Alert severity="warning">
                <AlertTitle>No odometer</AlertTitle>
                The odometer isn't filled in. Do you want to update the
                odometer?
              </Alert>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="outlined">Print preview</Button>
          <Button variant="contained" onClick={handleFeedBackOpen}>
            Complete invoice
          </Button>
        </DialogActions>
      </Dialog>
      <FeedbackDialog
        title="Complete the invoice"
        open={feedBackOpen}
        onClose={handleFeedBackClose}
        actions={
          <>
            <Button variant="outlined" onClick={handleFeedBackClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleFeedbackConfirm}
            >
              Complete invoice
            </Button>
          </>
        }
      >
        <p>
          When you finish the invoice, you will complete the work order. Once
          the invoice is finished, it will not be possible to change anything to
          the work order.
        </p>
        <p>
          Are you sure you want to complete the work order and finish the
          invoice?
        </p>
      </FeedbackDialog>
    </>
  );
};

export default Invoice;
