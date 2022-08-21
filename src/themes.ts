import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    text: {
      primary: "rgb(255, 255, 255)",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    fontFamily: "Signika Negative",
    fontWeightLight: 300,
    fontWeightBold: 700,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(180deg, rgba(166,73,133,1) 0%, rgba(96,45,156,1) 23%, rgba(77,38,143,1) 39%, rgba(45,40,147,1) 56%, rgba(42,74,150,1) 73%, rgba(73,171,176,1) 100%);",
          borderRadius: 0,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          background: "transparent",
          boxShadow: "none",
        },
      },
    },
  },
});
