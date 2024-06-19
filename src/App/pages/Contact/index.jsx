import { useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import Translate from '@components/Translate';
import { HOME_ROUTE, CONTACT_ROUTE } from '@constants/routes';
import { SEND_MAIL_URL } from '@constants/urls';
import Form from './components/Form';
import Message from './components/Message';

import logoSrc from '@assets/images/logo-primary.svg';
import avatarSrc from '@assets/images/avatar.jpg';

const STATES = { PENDING: 'pending', SUCCESS: 'success', ERROR: 'error' };

function renderContent(state, onSubmit) {
  switch(state) {
  case STATES.SUCCESS: {
    return <Message icon={<CheckCircleIcon color="success" />} text={<Translate text="app.contact.success" />} />;
  }
  case STATES.ERROR: {
    return <Message icon={<ErrorIcon color="error" />} text={<Translate text="app.contact.error" />} />;
  }
  case STATES.PENDING: {
    return <Message icon={<CircularProgress />} />;
  }
  default: return <Form onSubmit={onSubmit} />;
  }
}

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function sendEmail(email) {
    setStatus(STATES.PENDING);

    try {
      await axios.post(SEND_MAIL_URL, { email });
      setStatus(STATES.SUCCESS);
    } catch (error) {
      setStatus(STATES.ERROR);
    }
  }

  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" pt={4}>
          <Link href={HOME_ROUTE}>
            <img src={logoSrc} alt="Logo" style={{ height: 48, width: 48 }} />
          </Link>
          <Stack direction="row" alignItems="center" spacing={3}>
            <Link href={CONTACT_ROUTE}>
              <RefreshIcon color="primary" sx={{ height: 32, width: 32 }} />
            </Link>
            <Link href={HOME_ROUTE}>
              <ClearIcon color="primary" sx={{ height: 32, width: 32 }} />
            </Link>
          </Stack>
        </Stack>
      </Container>
      <Divider>
        <Typography variant="h5" align="center">
          <img src={avatarSrc} alt="Avatar" style={{ width: 96, height: 96, borderRadius: '50%' }} />
        </Typography>
      </Divider>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom align="center" sx={{ fontSize: { xs: 32, sm: 40 }}}>
          <Translate text="app.contact.description1" />
        </Typography>
        <Typography variant="h3" gutterBottom align="center" sx={{ fontSize: { xs: 32, sm: 40 }}}>
          <Translate text="app.contact.description2" />
        </Typography>
        {renderContent(status, sendEmail)}
      </Container>
    </>
  );
}
