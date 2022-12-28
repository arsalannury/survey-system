import React, { useEffect, useState } from 'react';
import MUIHelperText from '../../../MuiTheme/MUIHelperText';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { SurveyLogo, Google } from '../../../assets/exporter';
import CustomButton from '../../../MuiTheme/CustomButton';
import {
  CreateAccountButtonWrapper,
  CreateAccountTypography,
  DefaultTypography,
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
  ForgetPassword,
  GoogleLoginImage,
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
import { LoginWithEmailFormDialog } from '../EmailLoginProvider/EmailLoginDialog';
import { supabase } from '../../../helper/supabaseClient';
import {
  ErrorToastHandler,
  SuccessToastHandler,
} from '../../Toasts/ReactToastify';
import { Link, useNavigate } from 'react-router-dom';
import CircularProgressTheme from '../../../MuiTheme/CircularProgressTheme';

const LoginForm: React.FC<LoginFormProps> = ({ handleShowAuthChange }) => {
  // const { isLoading, isError, data } = useGetAllUsers();
  // const finalData = data as AxiosResponse;

  const [open, setOpen] = useState(false);
  const [emailLogin, setEmailLogin] = useState<string>('');
  const [loginLoader, setLoginLoader] = useState<boolean>(false);
  const [userLogin, setUserLogin] = useState<LoginFormatInterface>({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleClickOpenClose = (state: boolean) => {
    setOpen(state);
  };

  const setEmailLoginHandler = (value: string) => {
    setEmailLogin(value);
  };

  const handleUserLoginChange = ({
    currentTarget: input,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const shallowCopy = { ...userLogin };
    shallowCopy[input.name as keyof LoginFormatInterface] = input.value;
    setUserLogin(shallowCopy);
  };

  useEffect(() => {
    return () => {};
  });

  const onSubmitLogin = async (event: any) => {
    event.preventDefault();
    setLoginLoader(true);
    const { data, error: FetchError } = await supabase
      .from('login-register')
      .select('userName,password,user_id')
      .eq('userName', userLogin.username);

    if (FetchError) {
      setLoginLoader(false);
      throw new Error(FetchError.message);
    }

    if (data?.length! === 0) {
      setLoginLoader(false);
      ErrorToastHandler('User not found');
      return;
    }

    const userFounded = data[0];
    if (
      userFounded.userName === userLogin.username &&
      Number(userFounded.password) === Number(userLogin.password)
    ) {
      localStorage.setItem(
        'survey-token-saved-local-storage-register-login-user',
        userFounded.user_id
      );
      navigate('/');
      SuccessToastHandler('login successfull');
    } else {
      ErrorToastHandler('username or password is inCorrect');
    }
    setLoginLoader(false);
  };

  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: '/' },
    });
    console.log(data);
    console.log(error);
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
        <Grid gap={2} container {...LoginWithEmailGridWrapperProps}>
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
          <Grid
            onClick={signInWithGoogle}
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
            <img style={GoogleLoginImage} src={Google} alt="google" />
          </Grid>
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
            <Box>
              <Typography sx={{ ...DefaultTypography, marginLeft: 2 }}>
                forget your password ?
                <Link style={ForgetPassword} to={'/forget-password'}>
                  {' '}
                  click here
                </Link>
              </Typography>
            </Box>
            <Box sx={CreateAccountButtonWrapper}>
              <CustomButton>
                <Button
                  onClick={(event) => onSubmitLogin(event)}
                  type="submit"
                  variant="contained"
                >
                  {loginLoader ? (
                    <CircularProgressTheme>
                      <CircularProgress />
                    </CircularProgressTheme>
                  ) : (
                    'Login'
                  )}
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
