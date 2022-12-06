import React from 'react';
import {Grid} from '@mui/material';
import RegisterForm from './RegisterForm';

const RegisterPage: React.FC<any> = () => {
  return (
    <>
    <Grid 
    container
    alignItems={"center"}
    justifyContent={"space-between"}
    >
     <Grid item xs={12} sm={12} md={6} lg={6}>
      <RegisterForm />
     </Grid>
     <Grid item xs={12} sm={12} md={6} lg={6}>
      4
     </Grid>
    </Grid>
    </>
  )
}

export default RegisterPage