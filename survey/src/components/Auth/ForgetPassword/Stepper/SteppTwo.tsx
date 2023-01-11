import { Box, Typography } from '@mui/material';
import {
  SteppImage,
  SteppImageBox,
  SteppLine,
  SteppText,
  SteppTwoStyle,
} from '../ForgetPasswordStyle';
import { Username } from '../../../../assets/exporter';
import { useDispatch, useSelector } from 'react-redux';
import { steppTwoTransform } from '../../../../redux/reducers/ForgerPasswordStepperReducer';
import { SteppsState } from '../../../../redux/ReduxInterfaces';

const SteppTwo = () => {
  const steppStates = useSelector((state:SteppsState) => state.forgetPasswordStepperReducer.steppTwo);
  const dispatch = useDispatch();
  return (
    <>
      <Box sx={SteppTwoStyle}>
        <Typography sx={{ ...SteppText, top: '0' }}>
          Tell us username
        </Typography>
        <Box
        style={{transform:steppStates}}
        onClick={() => {dispatch(steppTwoTransform(null))}}
        sx={SteppImageBox}>
          <img src={Username} style={SteppImage} alt="stepp_one" />
        </Box>
        <Typography sx={SteppLine} component="span" />
        <Typography sx={SteppLine} component="span" />
        <Typography sx={SteppLine} component="span" />
      </Box>
    </>
  );
};

export default SteppTwo;
