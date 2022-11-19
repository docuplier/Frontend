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

const mode = storage.get(THEME_CACHE_KEY, "dark");

const themes = createTheme({
  typography: {
    fontFamily: FONT_FAMILY,
    ...TYPOGRAPHY,
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  color: {
    gradientBg: "linear-gradient(90.26deg, #101549 37.88%, #3B4CF1 164.54%)",
  },
  palette: {
    grey: {
      ...grey,
      600: "",
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
});

const theme = responsiveFontSizes(themes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
