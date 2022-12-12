import axios, { AxiosInstance } from 'axios';

export const BaseUrlAuth: AxiosInstance = axios.create({
  baseURL: 'https://survey-2cd0c-default-rtdb.firebaseio.com',
});
