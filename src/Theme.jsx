import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#D4AF37",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#333333",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F9F9F9",
    },
    text: {
      primary: "#333333",
      secondary: "#C0C0C0",
    },
    divider: "#C0C0C0",
  },
  typography: {
    fontFamily: "'IBM Plex Sans', 'Montserrat', sans-serif",
    h1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
      color: "#333333",
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
      color: "#333333",
    },
    h3: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 500,
      color: "#333333",
    },
    body1: {
      fontFamily: "'IBM Plex Sans', sans-serif",
      color: "#333333",
    },
    body2: {
      fontFamily: "'IBM Plex Sans', sans-serif",
      color: "#C0C0C0",
    },
    button: {
      fontFamily: "'IBM Plex Sans', sans-serif",
      fontWeight: 600,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          padding: "0.6rem 1.2rem",
        },
        containedPrimary: {
          backgroundColor: "#D4AF37",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#b9972e", // darker gold
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          border: "1px solid #C0C0C0",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});
