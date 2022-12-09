import React from 'react';
import * as yup from "yup";
import MUIHelperText from "../../../MuiTheme/MUIHelperText";
import {Box, Button, Grid, TextField, Typography} from '@mui/material';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {
    CreateAccountButtonWrapper,
    CreateAccountTypography,
    DefaultTypography,
    DotStyle,
    FormStyle,
    InputStyle,
    LinkStyle,
    LoginTypography,
    NameInputs,
    NameInputsBox,
    RegisterFormBox,
    RegisterHeader,
    SurveyLogoStyle,
    TextsBox,
} from './RegisterStyle';
import {SurveyLogo} from '../../../assets/exporter';
import {Link} from 'react-router-dom';
import {BadgeIcon, BadgeIconEmail, BadgeIconPassword, BadgeIconUerName} from './RegisterIcons';
import CustomButton from '../../../MuiTheme/CustomButton';
import {yupResolver} from "@hookform/resolvers/yup";


const RegisterForm: React.FC<any> = () => {

    const schema = yup.object().shape({
        firstName: yup.string().required("enter your name"),
        lastName: yup.string().required("enter your last name"),
        username: yup.string().min(4).required("enter your user name"),
        email: yup.string().email("email format is incorrect").required("enter your email address"),
        password: yup.string().min(8).max(20).required("enter your password")
    }).required()
    const defaultValues = {
        firstName: '',
        lastName: "",
        username: "",
        email: "",
        password: ""
    }
    const {
        control,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({
        mode: "onChange",
        defaultValues,
        resolver: yupResolver(schema),
    });
    const onSubmitData: SubmitHandler<any> = (data?: any) => console.log(data);
    return (
        <Grid>
            <Box sx={RegisterHeader}>
                <img style={SurveyLogoStyle} src={SurveyLogo} alt="logo-main-survey"/>
                <Typography sx={DefaultTypography}>Survey app</Typography>
            </Box>
            <Box sx={TextsBox}>
                <Typography component={'h1'} sx={CreateAccountTypography}>
                    Create new account<span style={DotStyle}/>
                </Typography>
                <Typography sx={LoginTypography}>
                    Already A Member ?{' '}
                    <Link style={LinkStyle} to={'/'}>
                        Log In
                    </Link>
                </Typography>
            </Box>
            <Box onSubmit={handleSubmit(onSubmitData)} sx={FormStyle} component={'form'}>
                <MUIHelperText>
                <Box sx={NameInputs}>
                    <Box sx={{...NameInputsBox, marginRight: '25px'}}>
                        <Controller
                            name="firstName"
                            control={control}
                            render={({field}) =>
                                <TextField
                                id="firstName"
                                placeholder="first name"
                                sx={InputStyle}
                                variant="outlined" {...field}
                                error={!!errors.firstName}
                                helperText={errors?.firstName?.message}
                                />}
                        />
                        {BadgeIcon}
                    </Box>
                    <Box sx={NameInputsBox}>
                        <Controller
                            name="lastName"
                            control={control}
                            render={({field}) =>
                                <TextField
                                id="lastName"
                                placeholder="last name"
                                sx={InputStyle}
                                variant="outlined" {...field}
                                error={!!errors.lastName}
                                helperText={errors?.lastName?.message}
                                />}
                        />
                        {BadgeIcon}
                    </Box>
                </Box>
                <Box sx={RegisterFormBox}>
                    <Controller
                        name="email"
                        control={control}
                        render={({field}) =>
                        <TextField
                        id="emailId"
                        placeholder="email"
                        sx={{...InputStyle, width: '100%', alignSelf: 'baseline'}}
                        variant="outlined" {...field}
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                        />}
                    />
                    {BadgeIconEmail}
                </Box>
                    <Box sx={RegisterFormBox}>
                        <Controller
                            name="username"
                            control={control}
                            render={({field}) =>
                                <TextField
                                    id="username"
                                    placeholder="user name"
                                    sx={{...InputStyle, width: '100%', alignSelf: 'baseline'}}
                                    variant="outlined" {...field}
                                    error={!!errors.username}
                                    helperText={errors?.username?.message}
                                />}
                        />
                        {BadgeIconUerName}
                    </Box>
                <Box sx={RegisterFormBox}>
                    <Controller
                        name="password"
                        control={control}
                        render={({field}) =>
                        <TextField
                        id="passwordId"
                        placeholder="password"
                        sx={{...InputStyle, width: '100%', alignSelf: 'baseline'}}
                        variant="outlined" {...field}
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                        />}
                    />
                    {BadgeIconPassword}
                </Box>
                <Box sx={CreateAccountButtonWrapper}>
                    <CustomButton>
                        <Button type="submit" variant="contained">
                            Create account
                        </Button>
                    </CustomButton>
                </Box>
                </MUIHelperText>
            </Box>
        </Grid>
    );
};

export default RegisterForm;
