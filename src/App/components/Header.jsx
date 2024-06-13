
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Translate from '@components/Translate';

// import backgroundSrc from '@assets/images/background.jpg';
import avatarSrc from '@assets/images/avatar.jpg';

export default function Header() {
  const headingStyle = {
    m: 8,
    // inset: 0,
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // flexGrow: 1,
  };


  return (
    <Stack sx={headingStyle}>
      <Box sx={{ mb: 4 }}>
        <Typography color="inherit" variant="h1" align="center">
          <Translate text="app.header.title" />
        </Typography>
        <Typography color="inherit" variant="h5" align="center">
          <Translate text="app.header.body" />
        </Typography>
      </Box>
      <img src={avatarSrc} alt="Avatar" style={{ borderRadius: '50%' }} />
    </Stack>
  );
}
