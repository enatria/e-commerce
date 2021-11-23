import React from "react";
import { createMuiTheme, ThemeProvider } from "@mui/material";
import { Typography } from "@mui/material";

// Custom Themes Material UI
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#345B63",
      light: "#d4ecdd",
      dark: "#112031",
      contrastText: "#fff",
    },
    secondary: {
      main: "#152D35",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 200,
    fontWeightSemiBold: 400,
    fontWeightBold: 600,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography color="primary" fontWeight="fontWeightBold" variant="h1">
        Final Project 2
      </Typography>
    </ThemeProvider>
  );
};

export default App;
