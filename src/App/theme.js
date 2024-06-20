import { createTheme  } from '@mui/material/styles';

export const PRIMARY = '#6e07f3';

export const SECONDARY = '#5be9b9';

export const BACKGROUND = '#ffffff'; // '#e6e7eb';

export const INFO = '#00917b';

export const WARNING = '#e31394';

export const SUCCESS = '#58be46';

export const ERROR = '#c30019';

const transitionStyle = {
  transitionBehavior :'normal',
  transitionDelay: '0s',
  transitionDuration: '0.2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'linear',
};

const theme = createTheme({
  typography: {
    fontFamily: 'Inter',
    h1: {
      fontWeight: 900,
    },
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 300,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: PRIMARY,
    },
    secondary: {
      main: SECONDARY,
    },
    background: {
      default: BACKGROUND,
    },
    info: {
      main: INFO,
    },
    success: {
      main: SUCCESS,
    },
    warning: {
      main: WARNING,
    },
    error: {
      main: ERROR,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          ...transitionStyle,
          borderRadius: 50,
          border: '2px solid',
          '&:hover': {
            backgroundColor: PRIMARY,
            color: 'white',
            border: `2px solid ${PRIMARY}`,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          ...transitionStyle,
          textDecoration: 'none',
          '&:hover': {
            color: SECONDARY,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

export default theme;
