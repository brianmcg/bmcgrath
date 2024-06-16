
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Translate from '@components/Translate';

import desktopSrc from '@assets/images/desktop.svg';
// import avatarSrc from '@assets/images/avatar.jpg';

export default function Header() {
  const headingStyle = {
    mt: 8,
    mb: 0,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <main>
      <Stack sx={headingStyle} spacing={4}>
        <Box sx={{ mb: 0 }}>
          <Typography color="inherit" variant="h1" align="center" sx={{ fontSize: { xs: 64, sm: 96 }}}>
            <Translate text="app.header.title" />
          </Typography>
          <Typography color="inherit" variant="h5" align="center">
            <Translate text="app.header.description" />
          </Typography>
        </Box>
        {/*<img src={avatarSrc} alt="Avatar" style={{ borderRadius: '50%' }} />*/}
        <img src={desktopSrc} alt="Programming" style={{ width: '40%', height: '40%' }}/>
      </Stack>
    </main>
  );
}
