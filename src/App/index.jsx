import { Route, Routes  } from 'react-router-dom';
import { HOME_ROUTE, CONTACT_ROUTE } from '@constants/routes';
import Root from './pages/Root';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Root/>} />
      <Route path={CONTACT_ROUTE} element={<Contact/>} />
    </Routes>
  );
}
