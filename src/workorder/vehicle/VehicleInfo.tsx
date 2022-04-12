import React from "react";
import {
  MoreVert,
  ContentCopy,
  DeleteOutline,
  Edit,
  AddLink,
  Album,
  Article,
  Restore,
  Settings,
  SettingsEthernet,
  ManageHistory,
  WorkHistory
} from "@mui/icons-material";
import {
  Card,
  CardHeader,
  IconButton,
  Box,
  CardContent,
  TextField,
  Typography,
  ButtonGroup,
  Button,
  ListItemIcon,
  Menu,
  MenuItem,
  Select,
  Grid,
  Badge
} from "@mui/material";
import OptionDialog from "../../ui/OptionDialog";
import ConfirmationDialog from "../../ui/ConfirmationDialog";
import TypographyCopy from "../../ui/TypographyCopy";

const INFO = {
  title: "Vehicle information",
  options: [
    {
      title: "Technical information",
      icon: <Settings color="primary" />
    },
    {
      title: "Manuals",
      icon: <Article color="primary" />
    },
    {
      title: "Fluid lookup",
      icon: <AddLink color="primary" />
    },
    {
      title: "HaynesPro Service Data",
      icon: <SettingsEthernet color="primary" />
    }
  ]
};

const HISTORY = {
  title: "History",
  options: [
    {
      title: "Vehicle history",
      icon: <ManageHistory color="primary" />
    },
    {
      title: "MOT history",
      icon: <Restore color="primary" />
    },
    {
      title: "Recent activity",
      icon: <Album color="primary" />
    },
    {
      title: "Tyre change history",
      icon: <WorkHistory color="primary" />
    }
  ]
};

enum Odometer {
  Kilometers = "kilometers",
  Miles = "miles",
  Hours = "hours",
  NoOdometer = "no_odometer"
}

const VehicleInfo = () => {
  const [isConfirmDialogOpened, setIsConfirmDialogOpened] = React.useState(
    false
  );
  const [isInfoOpened, setIsInfoOpened] = React.useState(false);
  const [isHistoryOpened, setIsHistoryOpened] = React.useState(false);
  const [odometerValue, setOdometerValue] = React.useState<Odometer>(
    Odometer.Kilometers
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <OptionDialog
        onClose={() => setIsInfoOpened(false)}
        open={isInfoOpened}
        dialogOptions={INFO}
      />
      <OptionDialog
        onClose={() => setIsHistoryOpened(false)}
        open={isHistoryOpened}
        dialogOptions={HISTORY}
      />
      <ConfirmationDialog
        onClose={() => setIsConfirmDialogOpened(false)}
        open={isConfirmDialogOpened}
        confirmButtonText="Unlink"
        text="Are you sure you want to unlink the vehicle?"
        title="Unlink the vehicle"
      />
      <Card variant="outlined">
        <CardHeader
          action={
            <IconButton onClick={handleClick}>
              <MoreVert />
            </IconButton>
          }
          subheader="Opel Corsa D"
          title={
            <Box
              component="span"
              sx={{
                alignItems: "center",
                backgroundColor: "rgb(255, 207, 0)",
                borderRadius: 1,
                display: "flex",
                mb: 1,
                overflow: "hidden",
                width: "fit-content"
              }}
            >
              <Box
                sx={{
                  backgroundColor: "primary.main",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  fontSize: (theme) => theme.typography.fontSize,
                  p: 1
                }}
              >
                NL
              </Box>
              <Box component="span" sx={{ pl: 1, pr: 1 }}>
                ZN-132-B
              </Box>
            </Box>
          }
        />
        <CardContent>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0
                }
              }
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <ListItemIcon>
                <Edit fontSize="small" />
              </ListItemIcon>
              Edit vehicle
            </MenuItem>
            <MenuItem onClick={() => setIsConfirmDialogOpened(true)}>
              <ListItemIcon>
                <DeleteOutline fontSize="small" />
              </ListItemIcon>
              Unlink vehicle
            </MenuItem>
          </Menu>
          <Grid container>
            <Grid item xs={8}>
              <TextField
                fullWidth
                label="Odometer"
                size="small"
                sx={{ mb: 2 }}
                disabled={odometerValue === Odometer.NoOdometer}
                InputProps={{
                  sx: {
                    borderBottomRightRadius: 0,
                    borderTopRightRadius: 0
                  }
                }}
                value={odometerValue === Odometer.NoOdometer ? " -" : "3500"}
              />
            </Grid>
            <Grid item xs={4}>
              <Select
                size="small"
                fullWidth
                value={odometerValue}
                onChange={(event) =>
                  setOdometerValue(event.target.value as Odometer)
                }
                sx={{
                  borderBottomLeftRadius: 0,
                  borderTopLeftRadius: 0
                }}
                inputProps={{
                  style: {
                    borderLeft: "none"
                  },
                  sx: {
                    borderLeft: "none"
                  }
                }}
              >
                <MenuItem value={Odometer.Kilometers}>Kilometers</MenuItem>
                <MenuItem value={Odometer.Miles}>Miles</MenuItem>
                <MenuItem value={Odometer.Hours}>Hours</MenuItem>
                <MenuItem value={Odometer.NoOdometer}>No odometer</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <TypographyCopy variant="body2">VIN: W9A21PASQ1****</TypographyCopy>
          <Typography variant="body2">Power (kW): 141</Typography>
          <Typography variant="body2">Engine code: A16LER</Typography>
          <Typography variant="body2">Fuel types: Petrol</Typography>
          <Typography variant="body2">
            Date of registration: 01/08/2011
          </Typography>
          <Typography variant="body2">MOT valid until: 04/09/2022</Typography>
          <ButtonGroup fullWidth sx={{ mt: 2 }}>
            <Button onClick={() => setIsInfoOpened(true)}>Info</Button>
            <Button onClick={() => setIsHistoryOpened(true)}>History</Button>
            <Button>
              <Badge color="secondary" badgeContent={2}>
                Recalls
              </Badge>
            </Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </>
  );
};

export default VehicleInfo;
