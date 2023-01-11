import { configureStore } from '@reduxjs/toolkit';
import reducer from '../combinesReducer/CombinesReducer';

export const store = configureStore({
  reducer,
});
