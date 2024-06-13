import { createTheme  } from '@mui/material/styles';
// import { blueGrey } from '@mui/material/colors';

// 6e07f3
// 110, 7, 243
//

export const PRIMARY = '#6e07f3';

export const SECONDARY = '#19194b';

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
      // fontSize: 48,
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
    button: {
      // fontWeight: 900,
      // textTransform: 'none',
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          '&[role="menu"]': {
            backgroundColor: SECONDARY,
            color: 'white',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          ...transitionStyle,
          borderRadius: 0,
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          ...transitionStyle,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ...transitionStyle,
          borderRadius: 0,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: SUCCESS,
          height: 5,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root:{
          textTransform: 'none',
          color: PRIMARY,
          // '&.Mui-selected': {
          //   opacity: 1,
          // }
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          ...transitionStyle,
          textDecoration: 'none',
          '&:hover': {
            color: INFO,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: { borderRadius: 0 },
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
});

export default theme;
