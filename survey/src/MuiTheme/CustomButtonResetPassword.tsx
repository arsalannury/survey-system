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
          textTransform: 'capitalize',
          height:"58px",
        },
      },
    },
  },
});

const CustomButtonResetPassword = ({ children }: Children) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomButtonResetPassword;
