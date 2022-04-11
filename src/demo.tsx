import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuBar from "./workorder/header/Header";
import WorkOrderDrawer from "./workorder/WorkOrderDrawer";
import WorkOrderLines from "./workorder/WorkOrderLines";
import {
  BuildOutlined,
  DashboardOutlined,
  DirectionsCarOutlined,
  EventOutlined,
  PersonOutline
} from "@mui/icons-material";
import ApplicationSettings from "./global/ApplicationSettings";
import { ApplicationContext } from "./global/ApplicationContext";
import OrderLines from "./workorder/OrderLines";

const drawerWidth = 200;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const settings = React.useContext(ApplicationContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [rightDrawerOpen, setRightDrawerOpen] = React.useState(true);

  const drawer = (
    <>
      <Toolbar />
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardOutlined />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EventOutlined />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem button selected>
          <ListItemIcon>
            <BuildOutlined />
          </ListItemIcon>
          <ListItemText
            primary={settings.isPortal ? "Orders" : "Work orders"}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonOutline />
          </ListItemIcon>
          <ListItemText primary="Accounts" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DirectionsCarOutlined />
          </ListItemIcon>
          <ListItemText primary="Vehicles" />
        </ListItem>
      </List>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Work order MUI refactor Demo: {settings.environment}
          </Typography>
          <ApplicationSettings />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          width: { sm: `calc(100% - ${rightDrawerOpen ? 600 : 200}px)` }
        }}
      >
        <Toolbar />
        <Drawer anchor="right" open={rightDrawerOpen} variant="persistent">
          <Toolbar />
          <WorkOrderDrawer />
        </Drawer>
        <MenuBar
          toggleDrawer={() => {
            setRightDrawerOpen((previousState) => !previousState);
          }}
          showSummary={!rightDrawerOpen}
        />
        <Box bgcolor="transparent" sx={{ p: 3 }}>
          {settings.isPortal ? <OrderLines /> : <WorkOrderLines />}
        </Box>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
