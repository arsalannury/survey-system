import React, { useEffect, useState } from 'react';
import MUIHelperText from '../../../MuiTheme/MUIHelperText';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { SurveyLogo } from '../../../assets/exporter';
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
  TextsBox,
  LoginWithEmailGridWrapperProps,
  LoginWithEmailGridContainerProps,
  LoginWithEmailGridContainerSxProp,
  DotStyleLogin,
} from '../AuthStyle';
import {
  BadgeIconPassword,
  BadgeIconUerName,
  BadgeIconEmailLoginSupabase,
} from '../AuthIcons';
import { LoginFormProps } from '../../../Interfaces/AuthInterface';
// import { useGetAllUsers } from '../../../hooks/GetAllUsers';
// import { AxiosResponse } from 'axios';
import { LoginFormatInterface } from '../../../Interfaces/LoginFormatInterface';
import { LoginWithEmailFormDialog } from '../../MuiComponents/EmailLoginDialog';
import { supabase } from '../../../helper/supabaseClient';
import { ErrorToastHandler } from '../../Toasts/ReactToastify';

const LoginForm: React.FC<LoginFormProps> = ({ handleShowAuthChange }) => {
  // const { isLoading, isError, data } = useGetAllUsers();
  // const finalData = data as AxiosResponse;

  const [open, setOpen] = useState(false);
  const [emailLogin, setEmailLogin] = useState<string>('');
  const [userLogin, setUserLogin] = useState<LoginFormatInterface>({
    username: '',
    password: '',
  });

  const handleClickOpenClose = (state: boolean) => {
    setOpen(state);
  };

  const setEmailLoginHandler = (value: string) => {
    setEmailLogin(value);
  };

  const handleUserLoginChange = ({
    currentTarget: input,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const shallowCopy = {...userLogin};
    shallowCopy[input.name as keyof LoginFormatInterface] = input.value;
    setUserLogin(shallowCopy);
  };

  useEffect(() => {
    return () => {};
  });

  const onSubmitLogin = async (event: any) => {
    event.preventDefault();
    const { data, error: FetchError } = await supabase
      .from('login-register')
      .select('*')
      .eq('userName', userLogin.username);

    if (FetchError) {
      throw new Error(FetchError.message);
    }

    if (data?.length! === 0) {
      ErrorToastHandler('User not found');
      return;
    }

    // localStorage.setItem(
    //   'survey-token-saved-local-storage-register-login-user',
    //   data?[0]
    // );
    // navigate('/');
  };

  return (
    <>
      <LoginWithEmailFormDialog
        emailLogin={emailLogin}
        open={open}
        handleClickOpenClose={handleClickOpenClose}
        setEmailLoginHandler={setEmailLoginHandler}
      />
      <Grid>
        <Box sx={RegisterHeader}>
          <img
            style={SurveyLogoStyle}
            src={SurveyLogo}
            alt="logo-main-survey"
          />
          <Typography sx={DefaultTypography}>Survey app</Typography>
        </Box>
        <Box sx={TextsBox}>
          <Typography component={'h1'} sx={CreateAccountTypography}>
            Login to your account
            <Typography component={'span'} sx={DotStyleLogin} />
          </Typography>
          <Typography sx={LoginTypography}>
            You Aren't A Member ?{' '}
            <span
              style={LinkStyle}
              onClick={() => handleShowAuthChange('show-register')}
            >
              Create Account
            </span>
          </Typography>
        </Box>
        <Grid container {...LoginWithEmailGridWrapperProps}>
          <Grid
            onClick={() => handleClickOpenClose(true)}
            sx={LoginWithEmailGridContainerSxProp}
            container
            {...LoginWithEmailGridContainerProps}
            item
            lg={4}
            md={4}
            sm={6}
            xs={7}
          >
            <Typography sx={{ DefaultTypography }}>Login with</Typography>{' '}
            {BadgeIconEmailLoginSupabase}
          </Grid>
          {/* <Grid></Grid> */}
        </Grid>
        <Box sx={FormStyle} component={'form'}>
          <MUIHelperText>
            <Box sx={RegisterFormBox}>
              <TextField
                id="username"
                placeholder="user name"
                name="username"
                value={userLogin.username}
                onChange={(event) => handleUserLoginChange(event)}
                sx={{ ...InputStyle, width: '100%', alignSelf: 'baseline' }}
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
                sx={{ ...InputStyle, width: '100%', alignSelf: 'baseline' }}
                variant="outlined"
              />
              {BadgeIconPassword}
            </Box>
            <Box sx={CreateAccountButtonWrapper}>
              <CustomButton>
                <Button
                  onClick={(event) => onSubmitLogin(event)}
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
              </CustomButton>
            </Box>
          </MUIHelperText>
        </Box>
      </Grid>
    </>
  );
};

export default LoginForm;
