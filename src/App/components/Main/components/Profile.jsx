import { ParallaxBanner } from 'react-scroll-parallax';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Translate from '@components/Translate';
import backgroundSrc from '@assets/images/background.png';

const parallaxStyle = { height: 500, aspectRatio: '2/1' };

const contentStyle = {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'common.white',
  flexGrow: 1,
  inset: 0,
};

export default function Profile() {
  return (
    <ParallaxBanner style={parallaxStyle} layers={[{ image: backgroundSrc, speed: -30 }]}>
      <Stack sx={contentStyle}>
        <Container>
          <Typography
            gutterBottom
            color="inherit"
            variant="h3"
            align="center"
            sx={{ fontSize: { xs: 32, sm: 40, md: 48 }}}
          >
            <Translate text="app.main.profile.title" />
          </Typography>
          <Container maxWidth="md">
            <Typography color="inherit" variant="body1" align="center">
              <Translate text="app.main.profile.description" />
            </Typography>
          </Container>
        </Container>
      </Stack>
    </ParallaxBanner>
  );
}
