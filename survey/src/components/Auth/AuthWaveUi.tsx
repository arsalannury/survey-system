import React from 'react';
import { Box } from '@mui/material';
import { WaveBox, LogoUiImage } from './AuthStyle';
import { Diffrent } from '../../assets/exporter';

const AuthWaveUi = () => {
  return (
    <>
      <Box sx={WaveBox}>
        <img src={Diffrent} alt="hands" style={LogoUiImage} />
      </Box>
    </>
  );
};

export default AuthWaveUi;
