import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { End } from '../../../../assets/exporter';
import { steppFourTransform } from '../../../../redux/reducers/ForgerPasswordStepperReducer';
import { SteppsState } from '../../../../redux/ReduxInterfaces';
import {
  SteppFourStyle,
  SteppImage,
  SteppImageBox,
  SteppLine,
  SteppText,
} from '../ForgetPasswordStyle';

const SteppFour = () => {
  const steppStates = useSelector((state:SteppsState) => state.forgetPasswordStepperReducer.steppFour);
  const dispatch = useDispatch();
  return (
    <>
      <Box sx={SteppFourStyle}>
        <Typography sx={SteppLine} component="span" />
        <Typography sx={SteppLine} component="span" />
        <Typography sx={SteppLine} component="span" />
        <Typography sx={SteppLine} component="span" />
        <Typography sx={{ ...SteppText, left:"73%" }}>let's go!</Typography>
        <Box 
        sx={{...SteppImageBox,marginRight:"20px",transform:steppStates}}
        onClick={() => {dispatch(steppFourTransform(null))}}
        >
          <img src={End} style={SteppImage} alt="stepp_four" />
        </Box>
        
      </Box>
    </>
  );
};

export default SteppFour;
