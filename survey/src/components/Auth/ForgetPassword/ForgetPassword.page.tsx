import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { Confirm, SurveyLogo } from '../../../assets/exporter';
import CustomButtonResetPassword from '../../../MuiTheme/CustomButtonResetPassword';
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
  return (
    <>
      <Box sx={RegisterHeader}>
        <img style={SurveyLogoStyle} src={SurveyLogo} alt="logo-main-survey" />
        <Typography sx={DefaultTypography}>Survey app</Typography>
      </Box>
      <Container maxWidth="lg">
        <Box sx={ResetPasswordMainGrid} >
          <Box>
            <Box {...ResetPasswordBox}>
              <Box sx={TextFieldBox}>
                <TextField
                  sx={TextFieldStyle}
                  label="enter your email"
                  variant="standard"
                />
                <img style={ConfirmImage} alt="confirm" src={Confirm} />
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
