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
    <section>
      <ParallaxBanner style={parallaxStyle} layers={[{ image: backgroundSrc, speed: -30 }]}>
        <Stack sx={contentStyle}>
          <Container maxWidth="sm">
            <Typography gutterBottom color="inherit" variant="h2" align="center">
              <Translate text="app.main.profile.title" />
            </Typography>
            <Typography color="inherit" variant="body1" align="center">
              <Translate text="app.main.profile.body" />
            </Typography>
          </Container>
        </Stack>
      </ParallaxBanner>
    </section>
  );
}
