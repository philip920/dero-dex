import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "./themes";

import { Paper, Grid } from "@mui/material/";

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Paper>
        <Grid sx={{ height: "100vh" }}>
            dero dex
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
