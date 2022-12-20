export const RegisterFormBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'column',
  position: 'relative',
  width: '85%',
  padding: '15px 0',
  '@media screen and (max-width: 500px)': {
    width: '100%',
  },
} as const;

export const RegisterIcons = {
  position: 'absolute',
  zIndex: '1',
  background: '#fff',
  right: '0',
} as const;

export const RegisterHeader = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '20px',
} as const;

export const DefaultTypography = {
  fontFamily: 'unset',
  marginBottom: '0',
} as const;

export const CreateAccountTypography = {
  fontFamily: 'FONT_FAMILY_BOLD',
  marginBottom: '20px',
  fontSize: '2.5em',
  color: '#222',
} as const;

export const LoginTypography = {
  fontFamily: 'FONT_FAMILY_LIGHT',
  fontSize: '.9em',
  color: '#adb5bd',
  marginLeft: '5px',
} as const;

export const SurveyLogoStyle = {
  width: '50px',
  marginRight: '10px',
} as const;

export const TextsBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-evenly',
  padding: '20px',
  position: 'relative',
} as const;

export const DotStyle = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  margin: '0 0 0 .1em',
  background: '#2176ff',
  position: 'absolute',
  top: '53px',
  '@media screen and (max-width: 446px)': {
    top: '113px',
  },
} as const;

export const DotStyleLogin = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  margin: '0 0 0 .1em',
  background: '#2176ff',
  position: 'absolute',
  top: '53px',
  '@media screen and (max-width: 482px)': {
    top: '113px',
  },
  '@media screen and (min-width: 900px) and (max-width: 964px)': {
    top: '113px',
  }
} as const;

export const LinkStyle = {
  fontFamily: 'FONT_FAMILY_BOLD',
  color: '#2176ff',
  textDecoration: 'none',
  marginLeft: '.3em',
  cursor: 'pointer',
} as const;

export const FormStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-evenly',
  padding: '20px',
} as const;

export const InputStyle = {
  border: '0',
  outline: 'none',
  padding: '15px',
  background: '#fff',
  borderRadius: '10px',
  fontSize: '.9em',
  color: '#777',
  '& .MuiInputBase-input': {
    '&::placeholder': {
      opacity: 0.4,
    },
  },
  '@media screen and (max-width: 480px)': {
    width: '100%',
  },
} as const;

export const NameInputsBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  position: 'relative',
  '@media screen and (max-width: 480px)': {
    marginRight: '0 !important',
    justifyContent: 'flex-start',
    width: '100%',
  },
} as const;

export const NameInputs = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '15px 0',
  '@media screen and (max-width: 480px)': {
    alignItems: 'flex-start',
    flexDirection: 'column',
    padding: '0',
  },
} as const;

export const CreateAccountButtonWrapper = {
  width: '100%',
  padding: '15px 0 0 0',
  display: 'flex',
  alignItems: 'center',
} as const;

export const showAuthComponentStyle = {
  height: '100vh',
  '@media screen and (max-width: 900px) and (min-width: 600px)': {
    height: 'auto',
  },
} as const;

// register.page styles

export const RegisterMainGrid = {
  overflow: 'hidden',
} as const;

// register wave ui styles

export const WaveBox = {
  position: 'relative',
  height: '119%',
} as const;

export const LogoUiImage = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  objectFit: 'unset',
  /* "@media screen and (max-width:500px)": {
         display: "none"
     }*/
} as const;

// #2176ff
// #003566
// #023e8a
// #495057
// #adb5bd

// login with email grid container props

export const LoginWithEmailGridWrapperProps = {
  alignItems: 'center',
  justifyContent: 'flex-start',
  px: 4,
} as const;

export const LoginWithEmailGridContainerProps = {
  alignItems: 'center',
  justifyContent: 'flex-start',
  p: 2,
  borderRadius: 1,
} as const;

export const LoginWithEmailGridContainerSxProp = {
  cursor: 'pointer',
  border: '1px dashed #2176ff',
  transition: 'all .3s ease-in-out',
  '&:hover': {
    background: '#023e8a',
    color: '#fff',
    border: '1px dashed #fff',
  },
} as const;


export const EmailIconLoginSupabase = {
  marginLeft: 15
}as const