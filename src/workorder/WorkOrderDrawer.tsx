import * as React from "react";

import {
  ShoppingBasketOutlined as ShoppingBasket,
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
  Link,
  Divider,
  Tooltip
} from "@mui/material";
import OverviewDialog from "./OverviewDialog";
import VehicleInfo from "./vehicle/VehicleInfo";

function TotalsInfo() {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
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
          >
            Invoice
          </Button>
        </CardContent>
      </Card>

      <OverviewDialog open={modalOpen} onClose={handleModalClose} />
    </>
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

export default function RightSideDrawer() {
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
