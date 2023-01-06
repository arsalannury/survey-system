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

// ** forget password page parent route **

export const ContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContetn: 'center',
  // marginTop: '30px',
} as const;

export const StepperMainBox = {
  width: '700px',
  height: '500px',
  display: 'flex',
} as const;

export const DefaultStepp = {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
} as const;

export const SteppImageBox = {
  padding: '8px',
  boxShadow: '0 0 18px #003566',
  borderRadius: '50%',
} as const;

export const SteppImage = {
  width: '50px',
  height: '50px',
} as const;

export const SteppLine = {
  width: '30px',
  height: '2px',
  margin: '0 10px',
  background: '#adb5bd',
} as const;

export const SteppLineSecondary = {
  width: '30px',
  height: '2px',
  background: '#adb5bd',
  marginTop: '260px',
} as const;

export const SteppCurveLine = {
  width: '30px',
  height: '2px',
  background: '#adb5bd',
  transform: 'rotate(90deg)',
} as const;

export const SteppText = {
  fontSize: '1.3em',
  fontStyle: 'italic',
  color: '#70e000',
  position: 'absolute',
  top: '31%',
  fontWeight: 'bold',
} as const;



export const SteppTwo = {
  margin: "255px 0 0 8px",
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
}