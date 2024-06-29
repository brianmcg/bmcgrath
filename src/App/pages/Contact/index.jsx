import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import MuiLink from '@mui/material/Link';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import ClearIcon from '@mui/icons-material/Clear';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import Translate from '@components/Translate';
import { HOME_ROUTE } from '@constants/routes';
import { post } from '@utils/api';
import Message from './components/Message';
import Form from './components/Form';
import logoSrc from '@assets/images/logo-primary.svg';
import avatarSrc from '@assets/images/avatar.jpg';

const STATES = { PENDING: 'pending', SUCCESS: 'success', ERROR: 'error' };

function renderMessage(state) {
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
  default: null;
  }
}

export default function Contact() {
  const [status, setStatus] = useState(null);
  const formRef = useRef(null);

  function resetForm() {
    if (formRef.current) {
      formRef.current.reset();
    }

    setStatus(null);
  }

  async function sendEmail(email) {
    setStatus(STATES.PENDING);

    try {
      await post('posts', email);
      setStatus(STATES.SUCCESS);
    } catch (error) {
      setStatus(STATES.ERROR);
    }
  }

  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" pt={4}>
          <MuiLink href={HOME_ROUTE}>
            <img src={logoSrc} alt="Logo" style={{ height: 48, width: 48 }} />
          </MuiLink>
          <Stack direction="row" alignItems="center" spacing={3}>
            <IconButton onClick={resetForm}>
              <RefreshIcon color="primary" sx={{ height: 32, width: 32 }} />
            </IconButton>
            <IconButton component={Link} to={HOME_ROUTE}>
              <ClearIcon color="primary" sx={{ height: 32, width: 32 }} />
            </IconButton>
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
        {status ? renderMessage(status) : <Form ref={formRef} onSubmit={sendEmail} />}
      </Container>
    </>
  );
}
