import React from "react";
import {
  Button,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  Typography,
  IconButton,
  Box,
  Grid,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Select,
  MenuItem
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { ApplicationContext } from "../global/ApplicationContext";
import CloseIcon from "@mui/icons-material/Close";
import OrderLines from "./OrderLines";
import WorkOrderLines from "./WorkOrderLines";
import { useSnackbar } from "notistack";

interface CompleteDialogProps {
  onClose: () => void;
  open: boolean;
}

const CompleteDialog: React.FC<CompleteDialogProps> = (props) => {
  const { onClose, open } = props;
  const { enqueueSnackbar } = useSnackbar();
  const settings = React.useContext(ApplicationContext);

  const [deliveryType, setDeliveryType] = React.useState("delivery");
  const handleDeliveryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryType((event.target as HTMLInputElement).value);
  };

  const [deliveryTime, setDeliveryTime] = React.useState("1");
  const handleDeliveryTimeChange = (event: SelectChangeEvent) => {
    setDeliveryTime(event.target.value as string);
  };

  const handleCompleteOrder = () => {
    onClose();
    enqueueSnackbar(`Your parts have been ordered`, {
      variant: "success"
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
        {settings.isPortal ? "Complete order" : "Complete work order"}
        <Box sx={{ ml: "auto" }}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        {settings.isPortal ? (
          <OrderLines listMode />
        ) : (
          <WorkOrderLines listMode />
        )}

        <Grid container pt={3}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Order reference"
              required
              size="small"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={6} spacing={2} rowSpacing={1}>
            <FormControl>
              <Typography variant="subtitle2">Delivery type</Typography>
              <RadioGroup value={deliveryType} onChange={handleDeliveryChange}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    pb: 1
                  }}
                >
                  <FormControlLabel
                    value="delivery"
                    control={<Radio />}
                    label="Delivery"
                  />
                  <Select
                    size="small"
                    value={deliveryTime}
                    disabled={deliveryType !== "delivery"}
                    onChange={handleDeliveryTimeChange}
                  >
                    <MenuItem value={1}>Mon 15:00</MenuItem>
                    <MenuItem value={2}>Tue 15:00</MenuItem>
                    <MenuItem value={3}>Wed 15:00</MenuItem>
                    <MenuItem value={4}>Thu 15:00</MenuItem>
                    <MenuItem value={5}>Fri 15:00</MenuItem>
                  </Select>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <FormControlLabel
                    value="pickup"
                    control={<Radio />}
                    label="Pickup"
                  />
                  <Select
                    size="small"
                    value={deliveryTime}
                    disabled={deliveryType !== "pickup"}
                    onChange={handleDeliveryTimeChange}
                  >
                    <MenuItem value={1}>Mon 15:00</MenuItem>
                    <MenuItem value={2}>Tue 15:00</MenuItem>
                    <MenuItem value={3}>Wed 15:00</MenuItem>
                    <MenuItem value={4}>Thu 15:00</MenuItem>
                    <MenuItem value={5}>Fri 15:00</MenuItem>
                  </Select>
                </Box>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            {deliveryType === "delivery" && (
              <List dense sx={{ p: 0 }}>
                <ListItem>
                  <Typography variant="subtitle2">Address</Typography>
                </ListItem>
                <ListItem>Customer John</ListItem>
                <ListItem>JohnDoestreet 69</ListItem>
                <ListItem>1234AB Timboektoe</ListItem>
              </List>
            )}
            {deliveryType === "pickup" && (
              <List dense sx={{ p: 0 }}>
                <ListItem>
                  <Typography variant="subtitle2">Address</Typography>
                </ListItem>
                <ListItem>Vehicle-Systems, Ratjatoe</ListItem>
                <ListItem>Vehiclestreet 42</ListItem>
                <ListItem>1234AB Ratjatoe</ListItem>
              </List>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              multiline
              label="Remarks"
              sx={{ width: "100%", mt: 2 }}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ mt: 2, textAlign: "right" }}>
              Total Cost: &euro;86.52
            </Typography>
            <Typography
              variant="h6"
              sx={{ mt: 2, textAlign: "right", opacity: 0.5 }}
            >
              Excl. &euro;71.50
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleCompleteOrder}>
          Order parts
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CompleteDialog;
