import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import {
  RegisterIcons,
  RegisterFormBox,
  RegisterFormNameBox,
  RegisterHeader
} from './RegisterStyle';
import SurveyLogo from '~/assets/images/logo-survey.png';

const BadgeIcon = (
  <span style={RegisterIcons} className="material-symbols-outlined">
    badge
  </span>
);

const RegisterForm: React.FC<any> = () => {
  return (
    <Grid>
        <Box sx={RegisterHeader}>
              <img src={SurveyLogo} alt="logo-main-survey" />
        </Box>
      <Box component={'form'}>
        <Box>
          <Box sx={RegisterFormBox}>
            <input
              placeholder="first name"
              type="text"
              name="fName"
              id="fNameId"
            />
            {BadgeIcon}
          </Box>
          <Box sx={RegisterFormBox}>
            <input
              placeholder="last name"
              type="text"
              name="lName"
              id="lNameId"
            />
            {BadgeIcon}
          </Box>
        </Box>
        <Box sx={RegisterFormBox}>
          <input placeholder="email" type="text" name="email" id="emailId" />
        </Box>
        <Box sx={RegisterFormBox}>
          <input
            placeholder="password"
            type="text"
            name="password"
            id="passwordId"
          />
        </Box>
        <Box>
          <Button type="submit" variant="contained">
            Create account
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default RegisterForm;
