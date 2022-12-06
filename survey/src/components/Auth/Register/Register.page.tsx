import React from 'react';
import { Grid } from '@mui/material';
import RegisterForm from './RegisterForm';
import RegisterWaveUi from './RegisterWaveUi';

const RegisterPage: React.FC<any> = () => {
  return (
    <>
      <Grid container alignItems={'center'} justifyContent={'space-between'}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <RegisterForm />
        </Grid>
        <Grid
          height={'100vh'}
          alignSelf={'flex-start'}
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          <RegisterWaveUi />
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterPage;
