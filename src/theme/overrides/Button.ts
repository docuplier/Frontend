import { grey } from "@mui/material/colors";
import { pxToRem } from "utils/pxToRem";

export const Button = {
  MuiButton: {
    defaultProps: {
      disableTouchRipple: true,
    },
    styleOverrides: {
      root: {
        fontFamily: "Munito",
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
        minWidth: 304,
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
};
