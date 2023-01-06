import { Box, Typography } from '@mui/material';
import { End } from '../../../../assets/exporter';
import {
  SteppFourStyle,
  SteppImage,
  SteppImageBox,
  SteppLine,
  SteppText,
} from '../ForgetPasswordStyle';

const SteppFour = () => {
  return (
    <>
      <Box sx={SteppFourStyle}>
        <Typography sx={SteppLine} component="span" />
        <Typography sx={SteppLine} component="span" />
        <Typography sx={SteppLine} component="span" />
        <Typography sx={SteppLine} component="span" />
        <Typography sx={{ ...SteppText, left:"73%" }}>let's go!</Typography>
        <Box sx={{...SteppImageBox,marginRight:"20px"}}>
          <img src={End} style={SteppImage} alt="stepp_four" />
        </Box>
        
      </Box>
    </>
  );
};

export default SteppFour;
