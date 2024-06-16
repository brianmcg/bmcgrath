import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ParallaxProvider } from 'react-scroll-parallax';
import { CssBaseline } from '@mui/material/';
import { ThemeProvider  } from '@mui/material/styles';
import i18n from '@utils/i18n';
import App from './App';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ParallaxProvider>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App />
          </ThemeProvider>
        </I18nextProvider>
      </ParallaxProvider>
    </BrowserRouter>
  </StrictMode>,
);
