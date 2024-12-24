// src/theme.ts
import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

// Extend the Palette interface to add customBackground and highlightedRow
declare module "@mui/material/styles" {
  interface Palette {
    customBackground: {
      box: string;
    };
    highlightedRow: {
      main: string;
    };
  }
  interface PaletteOptions {
    highlightedRow?: {
      main: string;
    };
    customBackground?: {
      box: string;
    };
  }
}

// Light theme configuration
export const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976D2",
      light: "#4791db",
      dark: "#115293",
    },
    customBackground: {
      box: grey[100],
    },
    highlightedRow: {
      main: "#f0f8ff",
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "default",
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "white",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          height: "64px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              color: "#fff",
            }),
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "main.MuiBox-root": {
          backgroundColor: grey[100],
        },
        body: {
          backgroundColor: grey[100],
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: "body2",
        fontFamily: "Roboto",
      },
    },
  },
});

// Dark theme configuration
export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#67b7f7",
      light: "#85c5f8",
      dark: "#4880ac",
    },
    customBackground: {
      box: "#121212",
    },
    highlightedRow: {
      main: "#333333",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "main.MuiBox-root": {
          backgroundColor: "#121212",
        },
        body: {
          backgroundColor: "#121212",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              color: "#fff",
            }),
        }),
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: "body2",
      },
    },
  },
});
