import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import ClearIcon from '@mui/icons-material/Clear';
import Translate from '@components/Translate';
import Form from './components/Form';
import { HOME_ROUTE } from '@constants/routes';

import logoSrc from '@assets/images/logo-primary.svg';
import avatarSrc from '@assets/images/avatar.jpg';

export default function Contact() {
  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" pt={4}>
          <Link href={HOME_ROUTE}>
            <img src={logoSrc} alt="Logo" style={{ height: 48, width: 48 }} />
          </Link>
          <Link href={HOME_ROUTE}>
            <ClearIcon color="primary" sx={{ height: 32, width: 32 }} />
          </Link>
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
        <Form />
      </Container>
    </>
  );
}
