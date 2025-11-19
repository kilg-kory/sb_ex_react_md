import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
            color: "inherit",
          textDecoration: "none",
          ":hover": {
            color: "inherit",
            textDecoration: "underline",
          },
        },
      },
    },
  },
});
