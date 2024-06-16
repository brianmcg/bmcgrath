
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Translate from '@components/Translate';
import EmailIcon from '@mui/icons-material/Email';

import desktopSrc from '@assets/images/desktop.svg';
import logoSrc from '@assets/images/logo-primary.svg';
// import avatarSrc from '@assets/images/avatar.jpg';

export default function Header() {
  const headingStyle = {
    mt: 8,
    mb: 0,
    alignItems: 'center',
    justifyContent: 'center',
  };

  const matches = useMediaQuery('(min-width:600px)');
  const imageStyle = matches ? { width: 512, height: 240 } : { width: 256, height: 120 };

  return (
    <main>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" pt={4}>
          <Link href="/">
            <img src={logoSrc} alt="Logo" style={{ height: 48, width: 48 }} />
          </Link>
          <Link href="/contact">
            <Button
              variant="outlined"
              type="submit"
              startIcon={<EmailIcon />}
            >
              <Translate text="app.root.header.contact" />
            </Button>
          </Link>
        </Stack>
      </Container>
      <Stack sx={headingStyle} spacing={4}>
        <Box sx={{ mb: 0 }}>
          <Typography
            color="inherit"
            variant="h1"
            align="center"
            sx={{ fontSize: { xs: 64, sm: 96 }}}
          >
            <Translate text="app.root.header.title" />
          </Typography>
          <Typography color="inherit" variant="h5" align="center">
            <Translate text="app.root.header.description" />
          </Typography>
        </Box>
        {/*<img src={avatarSrc} alt="Avatar" style={{ borderRadius: '50%' }} />*/}
        <img src={desktopSrc} alt="Programming" style={imageStyle}/>
      </Stack>
    </main>
  );
}
