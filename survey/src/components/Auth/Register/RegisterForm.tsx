import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import {
  RegisterFormBox,
  DefaultTypography,
  RegisterHeader,
  SurveyLogoStyle,
  TextsBox,
  CreateAccountTypography,
  DotStyle,
  LoginTypography,
  LinkStyle,
  FormStyle,
  InputStyle,
  NameInputs,
  NameInputsBox,
  CreateAccountButtonWrapper,
} from './RegisterStyle';
import { SurveyLogo } from '../../../assets/exporter';
import { Link } from 'react-router-dom';
import { BadgeIcon, BadgeIconEmail, BadgeIconPassword } from './RegisterIcons';
import CustomButton from '../../../MuiTheme/CustomButton';

const RegisterForm: React.FC<any> = () => {
  return (
    <Grid>
      <Box sx={RegisterHeader}>
        <img style={SurveyLogoStyle} src={SurveyLogo} alt="logo-main-survey" />
        <Typography sx={DefaultTypography}>Survey app</Typography>
      </Box>
      <Box sx={TextsBox}>
        <Typography component={'h1'} sx={CreateAccountTypography}>
          Create new account<span style={DotStyle}></span>
        </Typography>
        <Typography sx={LoginTypography}>
          Already A Member ?{' '}
          <Link style={LinkStyle} to={'/'}>
            Log In
          </Link>
        </Typography>
      </Box>
      <Box sx={FormStyle} component={'form'}>
        <Box sx={NameInputs}>
          <Box sx={{ ...NameInputsBox, marginRight: '25px' }}>
            <TextField
            variant="outlined"
              style={InputStyle}
              placeholder="first name"
              type="text"
              name="fName"
              id="fNameId"
            />
            {BadgeIcon}
          </Box>
          <Box sx={NameInputsBox}>
            <TextField
            variant="outlined"
              style={InputStyle}
              placeholder="last name"
              type="text"
              name="lName"
              id="lNameId"
            />
            {BadgeIcon}
          </Box>
        </Box>
        <Box sx={RegisterFormBox}>
          <TextField
          variant="outlined"
            style={InputStyle.emailandPassword}
            placeholder="email"
            type="text"
            name="email"
            id="emailId"
          />
          {BadgeIconEmail}
        </Box>
        <Box sx={RegisterFormBox}>
          <TextField
          variant="outlined"
            style={InputStyle.emailandPassword}
            placeholder="password"
            type="text"
            name="password"
            id="passwordId"
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
      </Box>
    </Grid>
  );
};

export default RegisterForm;
