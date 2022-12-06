import React from 'react';
import { Box } from '@mui/material';
import { WaveBox, LogoUiImage } from './RegisterStyle';
import { Diffrent } from '../../../assets/exporter';

const RegisterWaveUi = () => {
  return (
    <>
      <Box sx={WaveBox}>
        <img src={Diffrent} alt="hands" style={LogoUiImage} />
      </Box>
    </>
  );
};

export default RegisterWaveUi;
