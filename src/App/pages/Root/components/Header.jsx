import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MuiLink from '@mui/material/Link';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Translate from '@components/Translate';
import EmailIcon from '@mui/icons-material/Email';
import { HOME_ROUTE, CONTACT_ROUTE } from '@constants/routes';
import desktopSrc from '@assets/images/desktop.svg';
import avatarSrc from '@assets/images/avatar.jpg';
import logoSrc from '@assets/images/logo-primary.svg';

export default function Header() {
  const headingStyle = {
    mt: 8,
    mb: 0,
    alignItems: 'center',
    justifyContent: 'center',
  };

  const matches = useMediaQuery('(min-width:600px)');
  const imageStyle = matches ? { width: 512, height: 240 } : { width: 256, height: 120 };
  const avatartStyle = matches ? { width: 200, height: 200 } : { width: 100, height: 100 };

  return (
    <header>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" pt={4}>
          <MuiLink href={HOME_ROUTE}>
            <img src={logoSrc} alt="Logo" style={{ height: 48, width: 48 }} />
          </MuiLink>
        {/*  <Button
            component={Link} to={CONTACT_ROUTE}
            variant="outlined"
            startIcon={<EmailIcon />}
          >
            <Translate text="app.root.header.contact" />
          </Button>*/}
        </Stack>
      </Container>
      <Stack sx={headingStyle} spacing={4}>
        <Box sx={{ mb: 0, textAlign: 'center' }}>
          <Typography
            color="inherit"
            variant="h1"
            align="center"
            sx={{ fontSize: { xs: 64, sm: 96 }}}
          >
            <Translate text="app.root.header.title" />
          </Typography>
          <Typography color="inherit" variant="caption" align="center">
            <Translate text="app.root.header.description" />
          </Typography>
        </Box>
        <img src={avatarSrc} alt="Avatar" style={{ ...avatartStyle, borderRadius: '50%' }} />
        <img src={desktopSrc} alt="Programming" style={imageStyle}/>
      </Stack>
    </header>
  );
}
