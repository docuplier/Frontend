import {
  Theme as MuiTheme,
  ThemeOptions as MuiThemeOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomTheme extends MuiTheme {
    color?: {
      gradientBg: string;
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends MuiThemeOptions {
    color?: {
      gradientBg?: string;
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
