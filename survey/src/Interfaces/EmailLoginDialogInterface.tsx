export interface EmailLoginDialogInterface {
  setEmailLoginHandler: (value: string) => void;
  handleClickOpenClose: (state:boolean) => void;
  open: boolean;
  emailLogin: string;
}
