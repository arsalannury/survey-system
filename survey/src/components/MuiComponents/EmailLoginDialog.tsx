import * as React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContentText,
  DialogContent,
} from '@mui/material';
import { supabase } from '../../helper/supabaseClient';
import { EmailLoginDialogInterface } from '../../Interfaces/EmailLoginDialogInterface';
import { ToastContainer } from 'react-toastify';
import { ErrorToastHandler, SuccessToastHandler } from '../Toasts/ReactToastify';

export const FormDialog: React.FC<EmailLoginDialogInterface> = ({
  emailLogin,
  handleClickOpenClose,
  open,
  setEmailLoginHandler,
}) => {

  const handleLoginWithSupabase = async (): Promise<void> => {
    if (emailLogin.trim().length === 0) {
      ErrorToastHandler('enter your email');
      return;
    }
    const { error } = await supabase.auth.signInWithOtp({
      email: emailLogin,
    });

    if (error) {
      ErrorToastHandler('magic link send faild');
      return;
    }

    handleClickOpenClose(false);
    SuccessToastHandler("email send successfully");
  };

  return (
    <>
      <div>
        <Dialog open={open} onClose={handleClickOpenClose}>
          <DialogTitle>Login with email</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To login to survey app , please enter your email address here.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              value={emailLogin}
              onChange={(event) => setEmailLoginHandler(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClickOpenClose(false)}>Cancel</Button>
            <Button onClick={handleLoginWithSupabase}>Send magic link</Button>
          </DialogActions>
        </Dialog>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
