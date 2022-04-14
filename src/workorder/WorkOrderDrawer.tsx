import * as React from "react";

import {
  ShoppingBasketOutlined as ShoppingBasket,
  MoreVert,
  ReceiptOutlined,
  OpenInFullOutlined,
  BuildOutlined,
  SwitchAccount,
  PersonRemove
} from "@mui/icons-material";
import {
  Box,
  Chip,
  Button,
  Typography,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Link,
  Divider,
  Tooltip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover
} from "@mui/material";
import OverviewDialog from "./OverviewDialog";

import CompleteDialog from "./CompleteDialog";
import Invoice from "./Invoice";
import VehicleInfo from "./vehicle/VehicleInfo";
import { users } from "../global/shared/helpers/users";
import { SwitchUserDialog } from "./user/SwitchUserDialog";

function TotalsInfo() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [CompleteModalOpen, setCompleteModalOpen] = React.useState(false);
  const [invoiceOpen, setInvoiceOpen] = React.useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleCompleteModalOpen = () => {
    setCompleteModalOpen(true);
  };

  const handleCompleteModalClose = () => {
    setCompleteModalOpen(false);
  };

  const handleOverviewToCompleteModal = () => {
    setModalOpen(false);
    setCompleteModalOpen(true);
  };

  const handleInvoiceOpen = () => {
    setInvoiceOpen(true);
  };

  const handleInvoiceClose = () => {
    setInvoiceOpen(false);
  };

  return (
    <>
      <Card variant="outlined">
        <CardHeader
          action={
            <Tooltip title="Show overview">
              <IconButton onClick={handleModalOpen}>
                <OpenInFullOutlined />
              </IconButton>
            </Tooltip>
          }
          subheader="€71.50 Excl"
          title="€86.52"
        />
        <CardContent>
          <Button
            disableElevation
            fullWidth
            startIcon={<ShoppingBasket />}
            variant="contained"
            sx={{ mb: 1 }}
            onClick={handleCompleteModalOpen}
          >
            Order parts
            <Chip color="secondary" label="1" size="small" sx={{ ml: 1 }} />
          </Button>
          <Divider flexItem variant="middle">
            Or
          </Divider>
          <Button
            disableElevation
            fullWidth
            startIcon={<ReceiptOutlined />}
            variant="contained"
            sx={{ mt: 1 }}
            onClick={handleInvoiceOpen}
          >
            Invoice
          </Button>
        </CardContent>
      </Card>
      <OverviewDialog
        open={modalOpen}
        onClose={handleModalClose}
        actionTwo={handleOverviewToCompleteModal}
      />
      <CompleteDialog
        open={CompleteModalOpen}
        onClose={handleCompleteModalClose}
      />
      <Invoice open={invoiceOpen} onClose={handleInvoiceClose} />
    </>
  );
}

function AccountInfo() {
  const [isAccountExist, setIsAccountExist] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(users[0]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
    setAnchorEl(null);
  };

  const handleCloseDialog = (value) => {
    setOpenDialog(false);
    setSelectedValue(value);
  };
  return (
    <Card variant="outlined">
      {isAccountExist ? (
        <>
          <SwitchUserDialog
            selectedValue={selectedValue}
            open={openDialog}
            onClose={handleCloseDialog}
            users={users}
          />
          <CardHeader
            action={
              <IconButton onClick={(e) => handleClick(e)}>
                <MoreVert />
              </IconButton>
            }
            subheader={selectedValue.address}
            title={selectedValue.name}
          />
          {isAccountExist && (
            <Popover
              id={id}
              open={open}
              sx={{ ml: "23px" }}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
            >
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <BuildOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Edit user" />
                </ListItem>
                <ListItem onClick={handleClickOpenDialog} button>
                  <ListItemIcon>
                    <SwitchAccount />
                  </ListItemIcon>
                  <ListItemText primary="Switch user" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    setIsAccountExist(false);
                    setAnchorEl(null);
                  }}
                >
                  <ListItemIcon>
                    <PersonRemove />
                  </ListItemIcon>
                  <ListItemText primary="Unlink user" />
                </ListItem>
              </List>
            </Popover>
          )}
          <CardContent>
            <Typography variant="body2">
              Tel:&nbsp;
              <Link href="tel:0123456789" underline="none">
                {selectedValue.telephoneNumber}
              </Link>
            </Typography>
            <Typography variant="body2">
              Email:&nbsp;
              <Link href="mailto:john@example.com" underline="none">
                {selectedValue.mail}
              </Link>
            </Typography>
          </CardContent>
        </>
      ) : (
        <Button fullWidth onClick={() => setIsAccountExist(true)}>
          Link user
        </Button>
      )}
    </Card>
  );
}

export default function WorkOrderDrawer() {
  return (
    <Box sx={{ p: 2, width: 400 }}>
      <Box sx={{ mb: 2 }}>
        <TotalsInfo />
      </Box>
      <Box sx={{ mb: 2 }}>
        <VehicleInfo />
      </Box>
      <AccountInfo />
    </Box>
  );
}
