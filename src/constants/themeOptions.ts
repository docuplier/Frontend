import { pink, teal } from "@mui/material/colors";
import { pxToRem } from "../utils/pxToRem";

export const themeOptions = (mode: "light" | "dark") => {
  return mode === "light"
    ? {
        palette: {
          primary: {
            main: "#3B4CF1",
            dark: "#0B0D27",
            light: "#7682F5",
          },
          secondary: {
            main: pink[500],
          },
          background: {
            default: "#E5E5E5",
            paper: "#E5E5E5",
          },
          text: {
            primary: "#0B0D27",
            secondary: "#8F9099",
          },
        },
      }
    : {
        palette: {
          primary: {
            main: "#3B4CF1",
            dark: "#0B0D27",
            light: "#7682F5",
          },
          secondary: {
            main: pink[500],
          },

          background: {
            default: "#0B0D27",
            paper: "#0B0D27",
          },
        },
      };
};

export const FONT_FAMILY = [
  "Nunito",
  "Roboto",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");

export const TYPOGRAPHY = {
  h1: {
    fontSize: pxToRem(64),
    fontWeight: 700,
    lineHeight: 72 / 64,
  },
  h2: {
    fontSize: pxToRem(48),
    fontWeight: 700,
    lineHeight: 56 / 48,
  },
  h3: {
    fontSize: pxToRem(32),
    fontWeight: 700,
    lineHeight: 40 / 32,
  },
  h4: {
    fontSize: pxToRem(24),
    fontWeight: 700,
    lineHeight: 32 / 24,
  },
  subtitle1: {
    fontSize: pxToRem(24),
    fontWeight: 600,
    lineHeight: 32 / 24,
  },
  subtitle2: {
    fontSize: pxToRem(16),
    fontWeight: 600,
    lineHeight: 24 / 16,
  },
  body1: {
    fontSize: pxToRem(16),
    fontWeight: 400,
    lineHeight: 24 / 16,
  },
  body2: {
    fontSize: pxToRem(14),
    fontWeight: 400,
    lineHeight: 22 / 14,
  },
  caption: {
    fontSize: pxToRem(12),
    fontWeight: 400,
    lineHeight: 20 / 12,
  },
  overline: {
    fontSize: pxToRem(10),
    fontWeight: 400,
    lineHeight: 18 / 10,
  },
  button: {
    fontSize: pxToRem(12),
    fontWeight: 400,
    lineHeight: 20 / 12,
  },
};
