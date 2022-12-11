import React, {useEffect} from 'react';
import MUIHelperText from "../../../MuiTheme/MUIHelperText";
import {Box, Button, Grid, TextField, Typography} from '@mui/material';
import {SurveyLogo} from '../../../assets/exporter';
import CustomButton from '../../../MuiTheme/CustomButton';
import {
    CreateAccountButtonWrapper,
    CreateAccountTypography,
    DefaultTypography,
    DotStyle,
    FormStyle,
    InputStyle,
    LinkStyle,
    LoginTypography,
    RegisterFormBox,
    RegisterHeader,
    SurveyLogoStyle,
    TextsBox
} from "../AuthStyle";
import {BadgeIconPassword, BadgeIconUerName} from "../AuthIcons";
import {LoginFormProps} from "../../../Interfaces/AuthInterface";


const LoginForm: React.FC<LoginFormProps> = ({handleShowAuthChange}) => {

    useEffect(() => {
        return () => {}
    })

    return (
        <Grid>
            <Box sx={RegisterHeader}>
                <img style={SurveyLogoStyle} src={SurveyLogo} alt="logo-main-survey"/>
                <Typography sx={DefaultTypography}>Survey app</Typography>
            </Box>
            <Box sx={TextsBox}>
                <Typography component={'h1'} sx={CreateAccountTypography}>
                    Login to your account<span style={DotStyle}/>
                </Typography>
                <Typography sx={LoginTypography}>
                    You Aren't A Member ?{' '}
                    <span style={LinkStyle} onClick={() => handleShowAuthChange("show-register")}>
                        Create Account
                    </span>
                </Typography>
            </Box>
            <Box sx={FormStyle} component={'form'}>
                <MUIHelperText>
                    <Box sx={RegisterFormBox}>
                        <TextField
                            id="username"
                            placeholder="user name"
                            sx={{...InputStyle, width: '100%', alignSelf: 'baseline'}}
                            variant="outlined"
                        />
                        {BadgeIconUerName}
                    </Box>
                    <Box sx={RegisterFormBox}>
                        <TextField
                            id="passwordId"
                            placeholder="password"
                            sx={{...InputStyle, width: '100%', alignSelf: 'baseline'}}
                            variant="outlined"
                        />
                        {BadgeIconPassword}
                    </Box>
                    <Box sx={CreateAccountButtonWrapper}>
                        <CustomButton>
                            <Button type="submit" variant="contained">
                                Login
                            </Button>
                        </CustomButton>
                    </Box>
                </MUIHelperText>
            </Box>
        </Grid>
    );
};

export default LoginForm;
