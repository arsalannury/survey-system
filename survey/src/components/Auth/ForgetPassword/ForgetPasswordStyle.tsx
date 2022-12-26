export const ResetPasswordMainGrid = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  //   flexDirection: 'column',
  width: '100%',
  height: '75vh',
} as const;

export const ResetPasswordBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  p: 2,
  boxShadow: '0 0 55px #ddd',
  borderRadius: '5px',
} as const;

export const TimerBox = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100%',
  p: 2,
  ml: 2,
  borderLeft: '1px solid #ddd',
};

export const ConfirmImage = {
  width: '40px',
  position: 'absolute',
  right: '0',
  bottom: '0',
  cursor: 'pointer',
} as const;

export const TextFieldBox = {
  position: 'relative',
} as const;

export const TextFieldStyle = {
  width: '300px',
} as const;
