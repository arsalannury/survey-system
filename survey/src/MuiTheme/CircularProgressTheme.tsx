import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
type Children = {
  children: React.ReactNode;
};

const theme = createTheme({
  components: {
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: "#fff"
        },
      },
    },
  },
});

const CircularProgressTheme = ({ children }: Children) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CircularProgressTheme;
