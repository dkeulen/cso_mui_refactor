import * as React from "react";
import { Card, Grid } from "@mui/material";

function WorkorderTotalCard() {
  return (
    <Card>
      <Grid container>
        <Grid
          item
          md={12}
          sx={{
            background: "#ccc",
            p: 1,
            fontSize: 18,
            fontWeight: "700",
            display: "flex",
            justifyContent: "center"
          }}
        >
          &euro;0.00 Excl.
        </Grid>
        <Grid
          item
          md={12}
          sx={{
            p: 1.4,
            fontSize: 26,
            fontWeight: "700",
            display: "flex",
            justifyContent: "center"
          }}
        >
          &euro;0.00
        </Grid>
      </Grid>
    </Card>
  );
}

export default WorkorderTotalCard;
