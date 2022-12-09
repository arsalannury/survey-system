import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
type Children = {
    children: React.ReactNode;
};

const theme = createTheme({
    components: {
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    fontFamily: 'unset',
                },
            },
        },
    },
});

const MUIHelperText = ({ children }: Children) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUIHelperText;
