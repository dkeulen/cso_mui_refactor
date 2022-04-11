import * as React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { ApplicationContext } from "./ApplicationContext";

function HeaderTitle() {
  const settings = React.useContext(ApplicationContext);
  console.log("isPortal: ", settings.isPortal);
  return (
    <Breadcrumbs>
      <Link underline="hover" color="primary" href="#">
        <Typography variant="h6">
          {settings.isPortal ? "Orders" : "Work orders"}
        </Typography>
      </Link>
      <Typography variant="subtitle1">
        {settings.isPortal ? "Order" : "Work order"} 2022000001
      </Typography>
    </Breadcrumbs>
  );
}

export default HeaderTitle;
