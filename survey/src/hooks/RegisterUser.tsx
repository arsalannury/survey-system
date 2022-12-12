import { useMutation, UseMutationResult } from 'react-query';
import { AxiosResponse } from 'axios';
import { BaseUrlAuth } from '../Axios/BaseUrlAuth';

const addUserToDatabase = (userData: any) => {
  return BaseUrlAuth.post("/register-login.json",userData);
};

export const useAddUserToDatabase = (): UseMutationResult<
  AxiosResponse<any>,
  unknown,
  any,
  unknown
> => {
  return useMutation(addUserToDatabase);
};

