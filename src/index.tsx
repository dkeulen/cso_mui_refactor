import * as React from "react";
import ReactDOM from "react-dom";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme
} from "@mui/material/styles";
import Demo from "./demo";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ApplicationContextProvider } from "./global/ApplicationContext";
import { SnackbarProvider } from "notistack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const theme = createTheme({
  palette: {
    primary: {
      main: "#005596"
    },
    secondary: {
      main: "#d82e2f"
    }
  }
});

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: grey[50] },
          html: { backgroundColor: grey[50] }
        }}
      />
      <ApplicationContextProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <SnackbarProvider maxSnack={3}>
            <Demo />
          </SnackbarProvider>
        </LocalizationProvider>
      </ApplicationContextProvider>
    </ThemeProvider>
  </StyledEngineProvider>,
  document.querySelector("#root")
);
