
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Translate from '@components/Translate';

import avatarSrc from '@assets/images/avatar.jpg';
import programmingSrc from '@assets/icons/computer.svg';
import tabletSrc from '@assets/icons/tablet.svg';
import coffeeSrc from '@assets/icons/coffee.svg';

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
          <Typography color="inherit" variant="h1" align="center">
            <Translate text="app.header.title" />
          </Typography>
          <Typography color="inherit" variant="h5" align="center">
            <Translate text="app.header.body" />
          </Typography>
        </Box>

        <img src={avatarSrc} alt="Avatar" style={{ borderRadius: '50%' }} />

        <Stack direction="row" spacing={4} alignItems="flex-end">
          <img src={tabletSrc} alt="Programming" style={{ width: 128, height: 128 }}/>
          <img src={programmingSrc} alt="Programming" style={{ width: 256, height: 256 }}/>
          <img src={coffeeSrc} alt="Programming" style={{ width: 128, height: 128 }}/>
        </Stack>
      </Stack>
    </main>
  );
}
