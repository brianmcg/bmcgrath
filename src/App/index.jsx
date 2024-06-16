import { Route, Routes } from 'react-router-dom';
import Root from './pages/Root';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Root/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  );
}
