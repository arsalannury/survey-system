import React from 'react';
import { Box } from '@mui/material';
import { WaveBox, WaveImage, LogoUiImage } from './RegisterStyle';
import { Hands, Wave,Diffrent } from '../../../assets/exporter';

const RegisterWaveUi = () => {
  return (
    <>
      <Box sx={WaveBox}>
        <img src={Diffrent} alt="hands" style={LogoUiImage} />
        <img src={Wave} alt="wave" style={WaveImage} />
      </Box>
    </>
  );
};

export default RegisterWaveUi;
