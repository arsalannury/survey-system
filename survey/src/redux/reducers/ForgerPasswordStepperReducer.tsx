import { createSlice } from '@reduxjs/toolkit';

const states = {
  steppOne: 'none',
  steppTwo: 'none',
  steppThree: 'none',
};

export const forgetPasswordStepperReducer = createSlice({
  name: 'forgetPassword',
  initialState: states,
  reducers: {
    steppOneTransform: (state, action): any => {
      console.log(action);
      
      return {
        ...state,
        steppOne: 'scale(1.2)',
        steppTwo: "none",
        steppThree: "none"
      };
    },
    steppTwoTransform: (state, action): any => {
      return {
        ...state,
        steppTwo : 'scale(1.2)',
        steppOne : "none",
        steppThree : "none",
      }
    },
    steppThreeTransform: (state, action): any => {
      return (
        (state.steppOne = 'none'),
        (state.steppTwo = 'none'),
        (state.steppThree = 'scale(1.2)')
      );
    },
  },
});
export default forgetPasswordStepperReducer.reducer;
export const { steppOneTransform, steppThreeTransform, steppTwoTransform } =
  forgetPasswordStepperReducer.actions;
