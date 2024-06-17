
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Translate from '@components/Translate';

import desktopSrc from '@assets/images/desktop.svg';
import avatarSrc from '@assets/images/avatar.jpg';

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
    <main>
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
        <img src={avatarSrc} alt="Avatar" style={{ ...avatartStyle, borderRadius: '50%' }} />
        <img src={desktopSrc} alt="Programming" style={imageStyle}/>
      </Stack>
    </main>
  );
}
