import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import TerminalIcon from '@mui/icons-material/Terminal';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { useTheme } from '@mui/material';
import Translate from '@components/Translate';



const options = [{
  icon: <LinkedInIcon />,
  label: 'app.footer.linkedin',
  href: 'https://www.world.rugby/rankings',
}, {
  icon: <GitHubIcon />,
  label: 'app.footer.github',
  href: 'https://github.com/brianmcg/rugby-rankings',
}, {
  icon: <EmailIcon />,
  label: 'app.footer.email',
  href: 'http://www.bmcgrath.net',
}];

function renderOption({ icon, label, href }) {
  return (
    <Stack key={href} direction="row" alignItems="center" gap={1}>
      {icon}
      <Link href={href} target="_blank" color="inherit">
        <Typography variant="caption">
          <Translate text={label} />
        </Typography>
      </Link>
    </Stack>
  );
}

export default function Footer() {
  const { palette } = useTheme();
  const { primary, secondary, success } = palette;

  return (
    <footer>
      <Box
        sx={{
          color: 'common.white',
          marginTop: 2,
          padding: 8,
          backgroundImage: `linear-gradient(${primary.main}, ${secondary.main})`,
          borderTop: `solid 4px ${success.main}`,
        }}>
        <Container>
          <Stack justifyContent="center" alignItems="center">
            {/*<TerminalIcon sx={{ mb: 2, fontSize: 64 }} />*/}
            <Typography variant="h6">
              <Translate text="app.footer.title" />
            </Typography>
            <Box p={8}>
              <Stack direction="column" justifyContent="center" alignItems="flex-start" gap={4}>
                {options.map(option => renderOption(option))}
              </Stack>
            </Box>
            <Stack direction="row">
              <CopyrightIcon fontSize="small" />
              <Typography variant="body2">
                <Translate text="app.footer.body" />
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </footer>
  );
}
