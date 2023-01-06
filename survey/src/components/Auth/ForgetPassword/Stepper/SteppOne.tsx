import React from 'react';
import { Box, Typography } from '@mui/material';
import { Start } from '../../../../assets/exporter';
import {
  DefaultStepp,
  SteppCurveLine,
  SteppImage,
  SteppImageBox,
  SteppLine,
  SteppText,
  SteppLineSecondary,
} from '../ForgetPasswordStyle';

const SteppOne = () => {
  return (
    <>
      <Box sx={DefaultStepp}>
        <Typography sx={SteppText}>Hi there!</Typography>
        <Box sx={SteppImageBox}>
          <img src={Start} style={SteppImage} alt="stepp_one" />
        </Box>
        <Typography sx={SteppLine} component="span" />
        <Typography sx={SteppLine} component="span" />
        <Typography sx={SteppLine} component="span" />
        <Typography sx={SteppLine} component="span" />
        <Typography
          sx={{ ...SteppCurveLine, margin: '60px 0 10px -24px' }}
          component="span"
        />
        <Typography
          sx={{ ...SteppCurveLine, margin: '150px 0 10px -30px' }}
          component="span"
        />
        <Typography
          sx={{ ...SteppCurveLine, margin: '235px 0 10px -30px' }}
          component="span"
        />
        <Typography
          sx={{ ...SteppLineSecondary, marginLeft: '-5px' }}
          component="span"
        />
        <Typography
          sx={{ ...SteppLineSecondary, marginLeft: '13px' }}
          component="span"
        />
        <Typography
          sx={{ ...SteppLineSecondary, marginLeft: '15px' }}
          component="span"
        />
      </Box>
    </>
  );
};

export default SteppOne;
