import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ParallaxProvider } from 'react-scroll-parallax';
import { CssBaseline } from '@mui/material/';
import { ThemeProvider  } from '@mui/material/styles';
import { HOME_ROUTE, CONTACT_ROUTE } from '@constants/routes';
import i18n from '@utils/i18n';
import theme from './theme';
import Root from './pages/Root';
import Contact from './pages/Contact';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <ParallaxProvider>
          <BrowserRouter>
            <CssBaseline/>
            <Routes>
              <Route path={HOME_ROUTE} element={<Root/>} />
              <Route path={CONTACT_ROUTE} element={<Contact/>} />
            </Routes>
          </BrowserRouter>
        </ParallaxProvider>
      </I18nextProvider>
    </ThemeProvider>
  );
}
