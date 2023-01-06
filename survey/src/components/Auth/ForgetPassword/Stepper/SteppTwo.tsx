import { Box, Typography } from '@mui/material'
import React from 'react'
import { SteppImage, SteppImageBox, SteppText, SteppTwo as SteppTwoStyle } from '../ForgetPasswordStyle'
import Username from '../../../../assets/images/username.png';


const SteppTwo = () => {
  return (
    <>
    <Box sx={SteppTwoStyle}>
        <Typography sx={{...SteppText,top:"0"}}>Tell us username</Typography>
        <Box sx={SteppImageBox}>
          <img src={Username} style={SteppImage} alt="stepp_one" />
        </Box>
        </Box>
    </>
  )
}

export default SteppTwo