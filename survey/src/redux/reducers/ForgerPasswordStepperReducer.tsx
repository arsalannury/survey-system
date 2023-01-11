import { createSlice } from '@reduxjs/toolkit';

const states = {
  steppOne: 'none',
  steppTwo: 'none',
  steppThree: 'none',
  steppFour: 'none',
};

export const forgetPasswordStepperReducer = createSlice({
  name: 'forgetPassword',
  initialState: states,
  reducers: {
    steppOneTransform: (state, action): any => {
      return {
        ...state,
        steppOne: 'scale(1.2)',
        steppTwo: 'none',
        steppThree: 'none',
        steppFour: "none"
      };
    },
    steppTwoTransform: (state, action): any => {
      return {
        ...state,
        steppTwo: 'scale(1.2)',
        steppOne: 'none',
        steppThree: 'none',
        steppFour: "none"
      };
    },
    steppThreeTransform: (state, action): any => {
      return {
        ...state,
        steppTwo: 'none',
        steppOne: 'none',
        steppThree: 'scale(1.2)',
        steppFour: "none"
      };
    },
    steppFourTransform: (state, action): any => {
      return {
        ...state,
        steppTwo: 'none',
        steppOne: 'none',
        steppThree: 'none',
        steppFour: 'scale(1.2)',
      };
    },
  },
});
export default forgetPasswordStepperReducer.reducer;
export const { steppOneTransform, steppThreeTransform, steppTwoTransform, steppFourTransform } =
  forgetPasswordStepperReducer.actions;
