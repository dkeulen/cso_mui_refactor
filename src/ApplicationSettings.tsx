import * as React from "react";
import { SettingsOutlined } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup
} from "@mui/material";
import { ApplicationContext, Environment } from "./ApplicationContext";
import { useSnackbar } from "notistack";

const ApplicationSettings: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const settings = React.useContext(ApplicationContext);
  const { enqueueSnackbar } = useSnackbar();

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEnvironmentChange = (
    event: React.MouseEvent<HTMLElement>,
    newEnvironment: Environment
  ) => {
    settings.setEnvironment(newEnvironment);
    enqueueSnackbar(`Switched to ${newEnvironment} environment`, {
      variant: "success"
    });
  };

  return (
    <Box sx={{ ml: "auto" }}>
      <IconButton sx={{ color: "white" }} onClick={handleClick}>
        <SettingsOutlined />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem disableRipple>
          <ToggleButtonGroup
            color="primary"
            value={settings.environment}
            exclusive
            onChange={handleEnvironmentChange}
          >
            <ToggleButton value={Environment.gms}>GMS</ToggleButton>
            <ToggleButton value={Environment.portal}>Portal</ToggleButton>
          </ToggleButtonGroup>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ApplicationSettings;
