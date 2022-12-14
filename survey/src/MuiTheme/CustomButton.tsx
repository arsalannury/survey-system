import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
type Children = {
  children: React.ReactNode;
};

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'unset',
          borderRadius: '25px',
          textTransform: 'capitalize',
          background: '#2176ff',
          boxShadow: "none"
        },
      },
    },
  },
});

const CustomButton = ({ children }: Children) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomButton;
