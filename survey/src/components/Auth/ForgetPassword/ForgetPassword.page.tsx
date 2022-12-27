import { Box, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Confirm, SurveyLogo } from '../../../assets/exporter';
import { supabase } from '../../../helper/supabaseClient';
import { ErrorToastHandler } from '../../Toasts/ReactToastify';
import {
  DefaultTypography,
  RegisterHeader,
  SurveyLogoStyle,
} from '../AuthStyle';
import {
  ConfirmImage,
  ResetPasswordBox,
  ResetPasswordMainGrid,
  TextFieldBox,
  TextFieldStyle,
  TimerBox,
} from './ForgetPasswordStyle';

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState<string>('');

  const sendRecoveryEmail = async () => {

    if(email.trim().length === 0) {
      ErrorToastHandler("enter your email !")
    }

    const { data, error } = await supabase.auth.resetPasswordForEmail(email
      , {
        redirectTo: 'https://survey-system-final.vercel.app/forget-password',
      }
      );
      setEmail("");
    console.log(data);
    console.log(error);
  };

  return (
    <>
      <Box sx={RegisterHeader}>
        <img style={SurveyLogoStyle} src={SurveyLogo} alt="logo-main-survey" />
        <Typography sx={DefaultTypography}>Survey app</Typography>
      </Box>
      <Container maxWidth="lg">
        <Box sx={ResetPasswordMainGrid}>
          <Box>
            <Box {...ResetPasswordBox}>
              <Box sx={TextFieldBox}>
                <TextField
                  sx={TextFieldStyle}
                  label="enter your email"
                  variant="standard"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <img
                  onClick={sendRecoveryEmail}
                  style={ConfirmImage}
                  alt="confirm"
                  src={Confirm}
                />
              </Box>
              <Box sx={TimerBox}>
                <Typography sx={DefaultTypography}>1:00</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ForgetPasswordPage;
