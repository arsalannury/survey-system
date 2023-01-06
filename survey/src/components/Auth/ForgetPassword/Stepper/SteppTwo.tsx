import { Box, Typography } from '@mui/material'
import { SteppImage, SteppImageBox, SteppLine, SteppText, SteppTwoStyle } from '../ForgetPasswordStyle'
import { Username } from '../../../../assets/exporter'


const SteppTwo = () => {
  return (
    <>
    <Box sx={SteppTwoStyle}>
        <Typography sx={{...SteppText,top:"0"}}>Tell us username</Typography>
        <Box sx={SteppImageBox}>
          <img src={Username} style={SteppImage} alt="stepp_one" />
        </Box>
        <Typography sx={SteppLine} component="span" />
        <Typography sx={SteppLine} component="span" />
        <Typography sx={SteppLine} component="span" />
        </Box>
    </>
  )
}

export default SteppTwo