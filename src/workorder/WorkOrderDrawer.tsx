import * as React from "react";

import {
  ShoppingBasketOutlined as ShoppingBasket,
  ContentCopyOutlined as ContentCopy,
  MoreVert,
  ReceiptOutlined,
  OpenInFullOutlined
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
  ButtonGroup,
  ButtonBase,
  Link,
  Divider,
  Tooltip,
  TextField
} from "@mui/material";
import OverviewDialog from "./OverviewDialog";
import CompleteDialog from "./CompleteDialog";
import Invoice from "./Invoice";

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

function VehicleInfo() {
  return (
    <Card variant="outlined">
      <CardHeader
        action={
          <IconButton>
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
        <TextField
          fullWidth
          InputProps={{ endAdornment: "km" }}
          label="Odometer"
          size="small"
          sx={{ mb: 2 }}
          value="12934"
        />
        <Typography variant="body2">
          VIN: W9A21PASQ1****
          <ButtonBase
            focusRipple
            sx={{
              borderRadius: 4,
              color: "primary.main",
              fontSize: "inherit",
              ml: 1,
              p: 0.25
            }}
          >
            <ContentCopy fontSize="inherit" />
          </ButtonBase>
        </Typography>
        <Typography variant="body2">Power (kW): 141</Typography>
        <Typography variant="body2">Engine code: A16LER</Typography>
        <Typography variant="body2">Fuel types: Petrol</Typography>
        <Typography variant="body2">
          Date of registration: 01/08/2011
        </Typography>
        <Typography variant="body2">MOT valid until: 04/09/2022</Typography>
        <ButtonGroup fullWidth sx={{ mt: 2 }}>
          <Button>Info</Button>
          <Button>History</Button>
          <Button>Recalls</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

function AccountInfo() {
  return (
    <Card variant="outlined">
      <CardHeader
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        subheader="Kloosterweg 24, 6412 CN Heerlen"
        title="John Doe"
      />
      <CardContent>
        <Typography variant="body2">
          Tel:&nbsp;
          <Link href="tel:0123456789" underline="none">
            0123456789
          </Link>
        </Typography>
        <Typography variant="body2">
          Email:&nbsp;
          <Link href="mailto:john@example.com" underline="none">
            john@example.com
          </Link>
        </Typography>
      </CardContent>
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
