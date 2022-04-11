import * as React from "react";
import {
  Search,
  ImageOutlined as Image,
  SendOutlined as Send,
  Add,
  ShoppingBasketOutlined as ShoppingBasket,
  AccessTimeOutlined as AccessTime,
  RequestQuoteOutlined as RequestQuote,
  HelpOutline as Help
} from "@mui/icons-material";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import {
  AppBar,
  TextField,
  Toolbar,
  IconButton,
  Badge,
  Box,
  InputAdornment,
  Tooltip,
  Typography,
  Grid
} from "@mui/material";
import { useState } from "react";
import ActionButton from "./ActionButton";
import HeaderTitle from "./HeaderTitle";
import CompleteOrderDialog from "./CompleteOrderDialog";

function TooltipText() {
  return (
    <>
      <Typography paragraph>
        You can search for local stock, labour rates and activities using:
      </Typography>
      <Typography
        paragraph
        sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
      >
        10W40:2
      </Typography>
      <Typography paragraph>
        where 10W40 is your search term and :2 is the quantity that will be
        added to your work order.
      </Typography>
      <Typography>
        You can search for OE numbers and then select an order accounts which
        supports searching for OE numbers. After selecting the order account,
        you will see the results of your search. Then you can order the part
        that matches the OE number.
      </Typography>
    </>
  );
}

export default function MenuBar({ toggleDrawer, showSummary }) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [CompleteOrderModalOpen, setCompleteOrderModalOpen] = React.useState(
    false
  );

  const handleCompleteOrderModalOpen = () => {
    setCompleteOrderModalOpen(true);
  };

  const handleCompleteOrderModalClose = () => {
    setCompleteOrderModalOpen(false);
  };

  return (
    <>
      <AppBar position="static" color="inherit" elevation={1}>
        <Grid
          container
          sx={{ px: 3, py: 2 }}
          spacing={1}
          justifyContent="space-between"
        >
          <Grid item minWidth="max-content">
            <HeaderTitle />
          </Grid>
          {showSummary && (
            <Grid item display="flex">
              <Grid
                item
                marginRight={2}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Box
                  component="span"
                  sx={{
                    alignItems: "center",
                    backgroundColor: "rgb(255, 207, 0)",
                    borderRadius: 1,
                    display: "flex",
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
                      p: 0.7
                    }}
                  >
                    NL
                  </Box>
                  <Box component="span" sx={{ pl: 1, pr: 1 }}>
                    ZN-132-B
                  </Box>
                </Box>
              </Grid>
              <Grid item>
                <Typography variant="h6" display="inline">
                  €86.52
                </Typography>{" "}
                /{" "}
                <Typography variant="subtitle1" display="inline">
                  €71.50
                </Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item display="flex" md={3} style={{ flexGrow: 0 }}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  )
                }}
                placeholder="Add line quickly..."
                size="small"
                style={{ width: 300 }}
              />
              <Tooltip
                open={tooltipOpen}
                title={<TooltipText />}
                onClose={() => setTooltipOpen(false)}
              >
                <IconButton
                  color="inherit"
                  onClick={() =>
                    setTooltipOpen((previousState) => !previousState)
                  }
                  sx={{ ml: 1, mr: 1, alignSelf: "center" }}
                >
                  <Help fontSize="small" />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item display="flex">
              <ActionButton
                visibility={showSummary}
                icon={<Add />}
                buttonText="Add"
              />
              <ActionButton
                visibility={showSummary}
                icon={<Send />}
                buttonText="Send"
              />
              <ActionButton
                visibility={showSummary}
                icon={<ShoppingBasket />}
                buttonText="Order Parts"
                badge={1}
                onClick={handleCompleteOrderModalOpen}
              />
              <ActionButton
                visibility={showSummary}
                icon={<RequestQuote />}
                buttonText="Quotation"
              />
            </Grid>
            <Grid item display="flex" flex="1" padding={1} paddingBottom={0}>
              <Box
                sx={{ marginLeft: "auto", display: "flex", flexWrap: "nowrap" }}
              >
                <IconButton color="inherit" sx={{ mr: 1 }}>
                  <Badge
                    badgeContent={undefined}
                    color="secondary"
                    overlap="circular"
                    variant="dot"
                  >
                    <AccessTime />
                  </Badge>
                </IconButton>
                <IconButton color="inherit" sx={{ mr: 1 }}>
                  <Badge badgeContent={1} color="primary" overlap="circular">
                    <Image />
                  </Badge>
                </IconButton>
                <IconButton color="inherit" onClick={toggleDrawer}>
                  <ViewSidebarOutlinedIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <CompleteOrderDialog
        open={CompleteOrderModalOpen}
        onClose={handleCompleteOrderModalClose}
      />
    </>
  );
}
