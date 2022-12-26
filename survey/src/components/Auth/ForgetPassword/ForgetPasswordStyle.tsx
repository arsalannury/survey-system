export const ResetPasswordMainGrid = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
  right: '-1px',
  bottom: '0',
  cursor: 'pointer',
  margin: '0 0 2px 0',
  background: '#fff',
} as const;

export const TextFieldBox = {
  position: 'relative',
} as const;

export const TextFieldStyle = {
  width: '300px',
  '@media screen and (max-width: 380px)': {
    width: '180px',
  },
  '@media screen and (min-width: 380px) and (max-width: 430px)': {
    width: '200px',
  },
} as const;
