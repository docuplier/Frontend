import React from "react";
import ReactDOM from "react-dom/client";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import App from "./App";
import { storage } from "./utils/storage";
import { THEME_CACHE_KEY } from "./constants/storageCacheKeys";
import {
  FONT_FAMILY,
  themeOptions,
  TYPOGRAPHY,
} from "./constants/themeOptions";
import { BrowserRouter } from "react-router-dom";
import { pxToRem } from "utils/pxToRem";

const mode = storage.get(THEME_CACHE_KEY, "dark");

const themes = createTheme({
  typography: {
    fontFamily: FONT_FAMILY,
    ...TYPOGRAPHY,
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  palette: {
    grey: {
      ...grey,
      600: "linear-gradient(90.26deg, #101549 37.88%, #3B4CF1 164.54%)",
      700: "#F3F4FF",
      800: "#8F9099",
      900: "#46474B",
    },
    warning: {
      main: "#F1BE3B",
      light: "rgba(241, 190, 59, 0.1)",
    },
    success: {
      main: "#6AF13B",
      light: "rgba(106, 241, 59, 0.1)",
    },
    error: {
      main: "#F13B3B",
      light: "rgba(241, 59, 59, 0.1)",
    },
    action: {
      disabledBackground: "rgba(59, 76, 241, 0.2)",
    },
    ...themeOptions(mode)?.palette,
    mode,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          fontFamily: FONT_FAMILY,
          fontWeight: 700,
          borderRadius: "8px",
          boxShadow: "none",
          textTransform: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          fontSize: pxToRem(16),
        },
        containedPrimary: {
          "&:hover": {
            opacity: 0.7,
          },
          "&:active": {
            // backgroundColor: palette.primary.dark,
          },
        },

        outlinedInherit: {
          border: `1px solid ${grey[500]}`,
          "&:hover": {
            // backgroundColor: palette.action.hover,
          },
        },
        outlined: {
          background: "white !important",
        },
      },
    },
  },
});

const theme = responsiveFontSizes(themes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
