import { Box, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SurveyLogo } from '../../../assets/exporter';
import {
  RegisterHeader,
  SurveyLogoStyle,
  DefaultTypography,
} from '../AuthStyle';
import { ContainerStyle, StepperMainBox } from './ForgetPasswordStyle';
import SteppFour from './Stepper/SteppFour';
import SteppOne from './Stepper/SteppOne';
import SteppThree from './Stepper/SteppThree';
import SteppTwo from './Stepper/SteppTwo';

const ForgetPasswordPage = () => {
  return (
    <>
      <Box sx={RegisterHeader}>
        <img style={SurveyLogoStyle} src={SurveyLogo} alt="logo-main-survey" />
        <Typography sx={DefaultTypography}>Survey app</Typography>
      </Box>
      <Container sx={ContainerStyle} maxWidth="lg">
        <Box sx={StepperMainBox}>
          <SteppOne />
          <SteppTwo />
          <SteppThree />
          <SteppFour />
        </Box>
      </Container>
      <Outlet />
    </>
  );
};

export default ForgetPasswordPage;
