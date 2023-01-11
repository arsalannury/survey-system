import { createSlice } from '@reduxjs/toolkit';

const states = {
  steppOne: true,
  steppTwo: false,
  steppThree: false,
};

export const forgetPasswordStepperReducer = createSlice({
  name: 'forgetPassword',
  initialState: states,
  reducers: {
    test: (state, action): any => {
      return (state.steppOne = false);
    },
  },
});
export default forgetPasswordStepperReducer.reducer;
export const { test } = forgetPasswordStepperReducer.actions;
