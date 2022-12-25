import * as React from 'react';
import { useState } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContentText,
  DialogContent,
  CircularProgress,
} from '@mui/material';
import { supabase } from '../../helper/supabaseClient';
import { EmailLoginDialogInterface } from '../../Interfaces/EmailLoginDialogInterface';
import { ToastContainer } from 'react-toastify';
import {
  ErrorToastHandler,
  SuccessToastHandler,
} from '../Toasts/ReactToastify';
import { CircularProgressBlueTheme } from '../../MuiTheme/CircularProgressTheme';
import { publicButtonDialog } from './EmailLoginDialogStyle';

export const LoginWithEmailFormDialog: React.FC<EmailLoginDialogInterface> = ({
  emailLogin,
  handleClickOpenClose,
  open,
  setEmailLoginHandler,
}) => {
  const [magicLinkLoader, setMagicLinkLoader] = useState<boolean>(false);

  const handleLoginWithSupabase = async (): Promise<void> => {
    setMagicLinkLoader(true);
    if (emailLogin.trim().length === 0) {
      setMagicLinkLoader(false);
      ErrorToastHandler('enter your email');
      return;
    }
    const { error } = await supabase.auth.signInWithOtp({
      email: emailLogin,
    });

    if (error) {
      setMagicLinkLoader(false);
      ErrorToastHandler('magic link send faild');
      return;
    }

    setMagicLinkLoader(false);
    handleClickOpenClose(false);
    SuccessToastHandler('email send successfully');
    setEmailLoginHandler('');
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
            <Button
              sx={publicButtonDialog}
              onClick={() => {
                handleClickOpenClose(false);
                setEmailLoginHandler('');
              }}
            >
              Cancel
            </Button>
            <Button sx={publicButtonDialog} onClick={handleLoginWithSupabase}>
              {magicLinkLoader ? (
                <CircularProgressBlueTheme>
                  <CircularProgress />
                </CircularProgressBlueTheme>
              ) : (
                'Send magic link'
              )}
            </Button>
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
