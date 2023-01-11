import { Box, Typography } from '@mui/material';
import { Email } from '../../../../assets/exporter';
import {
  SteppCurveLine,
  SteppImage,
  SteppImageBox,
  SteppLine,
  SteppText,
  SteppThreeStyle,
} from '../ForgetPasswordStyle';
import { useSelector,useDispatch } from 'react-redux';
import { steppThreeTransform } from '../../../../redux/reducers/ForgerPasswordStepperReducer';
import { SteppsState } from '../../../../redux/ReduxInterfaces';

const SteppThree = () => {
  const steppStates = useSelector((state:SteppsState) => state.forgetPasswordStepperReducer.steppThree);
  const dispatch = useDispatch();
  return (
    <>
      <Box sx={SteppThreeStyle}>
        <Typography sx={{ ...SteppText, top: '0' }}>enter email</Typography>
        <Box 
        style={{transform:steppStates}}
        onClick={() => {dispatch(steppThreeTransform(null))}}
        sx={SteppImageBox}>
          <img src={Email} style={SteppImage} alt="stepp_one" />
        </Box>
        <Typography sx={SteppLine} component="span" />
        <Typography sx={SteppLine} component="span" />
        <Typography sx={SteppLine} component="span" />
        <Typography
          sx={{ ...SteppCurveLine, margin: "0 0 50px -25px" }}
          component="span"
        />
        <Typography
          sx={{ ...SteppCurveLine, margin: "0 0 130px -30px" }}
          component="span"
        />
        <Typography
          sx={{ ...SteppCurveLine, margin: "0 0 210px -30px" }}
          component="span"
        />
      </Box>
    </>
  );
};

export default SteppThree;
