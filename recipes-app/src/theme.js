import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  overrides: {
    palette: {
      type: "light",
      primary: {
        main: "#F8F4F3",
      },
      secondary: {
        main: "#cbaa9b",
      },
      background: {
        default: "#FFFDF7",
        paper: "#FFFDF7",
      },
      error: {
        main: "#EED6CA",
      },
      text: {
        primary: "#070707",
      },
    },

    typography: {
      h1: {
        fontFamily: "Cormorant Garamond",
        fontWeight: 400,
      },
      h3: {
        fontFamily: "Cormorant Garamond",
        fontSize: "1.6rem",
        fontWeight: 400,
        letterSpacing: "-0.01em",
      },
      h2: {
        fontFamily: "Cormorant Garamond",
        fontSize: "2.9rem",
        fontWeight: 600,
      },
      body1: {
        fontFamily: "Montserrat",
      },
    },
  },
});
