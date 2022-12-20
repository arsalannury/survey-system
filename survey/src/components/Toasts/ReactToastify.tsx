import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ErrorToastHandler = (text: string): any => {
  return toast.error(text);
};
