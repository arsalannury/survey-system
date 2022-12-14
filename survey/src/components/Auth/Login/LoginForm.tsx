import React, {useEffect, useState} from 'react';
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
import {useGetAllUsers} from "../../../hooks/GetAllUsers";
import {AxiosResponse} from "axios";
import {LoginFormatInterface} from "../../../Interfaces/LoginFormatInterface";


const LoginForm: React.FC<LoginFormProps> = ({handleShowAuthChange}) => {

    const {isLoading,isError,data} = useGetAllUsers();
    const finalData = data as AxiosResponse;

    const [userLogin,setUserLogin] = useState<LoginFormatInterface>({
        username:"",
        password:""
    });
    const handleUserLoginChange = ({currentTarget:input} : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const shallowCopy = userLogin;
        userLogin[input.name]! = input.value;
        setUserLogin(shallowCopy);
    }

    useEffect(() => {
        return () => {}
    })

    const onSubmitLogin = (event : any) => {
        event.preventDefault();
        const convToStandardFormat = Object.values(finalData?.data);
        console.log(convToStandardFormat)
    }

    return (
        <Grid>
            <Box sx={RegisterHeader}>
                <img style={SurveyLogoStyle} src={SurveyLogo} alt="logo-main-survey"/>
                <Typography sx={DefaultTypography}>Survey app</Typography>
            </Box>
            <Box sx={TextsBox}>
                <Typography component={'h1'} sx={CreateAccountTypography}>
                    Login to your account<Typography component={"span"} sx={DotStyle}/>
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
                            name="username"
                            value={userLogin.username}
                            onChange={(event) => handleUserLoginChange(event)}
                            sx={{...InputStyle, width: '100%', alignSelf: 'baseline'}}
                            variant="outlined"
                        />
                        {BadgeIconUerName}
                    </Box>
                    <Box sx={RegisterFormBox}>
                        <TextField
                            id="passwordId"
                            placeholder="password"
                            name="password"
                            value={userLogin.password}
                            onChange={(event) => handleUserLoginChange(event)}
                            sx={{...InputStyle, width: '100%', alignSelf: 'baseline'}}
                            variant="outlined"
                        />
                        {BadgeIconPassword}
                    </Box>
                    <Box sx={CreateAccountButtonWrapper}>
                        <CustomButton>
                            <Button onClick={(event) => onSubmitLogin(event)} type="submit" variant="contained">
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
