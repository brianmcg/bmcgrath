import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { useTheme } from '@mui/material';
import Translate from '@components/Translate';

import logoSrc from '@assets/images/logo.svg';

const options = [{
  icon: <LinkedInIcon />,
  label: 'app.footer.linkedin',
  href: 'https://www.linkedin.com/in/brianjmcgrath/',
}, {
  icon: <GitHubIcon />,
  label: 'app.footer.github',
  href: 'https://github.com/brianmcg',
}, {
  icon: <EmailIcon />,
  label: 'app.footer.email',
  href: 'mailto:brian.joseph.mcgrath@gmail.com',
}];

function renderOption({ icon, label, href, hoverColor }) {
  const linkStyle = {
    transitionBehavior :'normal',
    transitionDelay: '0s',
    transitionDuration: '0.2s',
    transitionProperty: 'all',
    transitionTimingFunction: 'linear',
    textDecoration: 'none',
    '&:hover': {
      color: hoverColor,
    },
  };

  return (
    <Stack key={href} direction="row" alignItems="center" gap={1}>
      {icon}
      <Link sx={linkStyle} href={href} target="_blank" color="inherit">
        <Typography variant="caption">
          <Translate text={label} />
        </Typography>
      </Link>
    </Stack>
  );
}

export default function Footer() {
  const { palette } = useTheme();
  const { primary, secondary } = palette;

  return (
    <footer>
      <Box
        sx={{
          padding: 8,
          color: 'common.white',
          backgroundImage: `linear-gradient(${primary.main}, ${primary.dark})`,
          borderTop: `solid 4px ${secondary.main}`,
        }}>
        <Container>
          <Stack justifyContent="center" alignItems="center" spacing={6}>
            <img src={logoSrc} alt="Logo" style={{ height: 64, width: 64, opacity: 0.75 }} />
            <Typography variant="h6" sx={{ opacity: 0.75 }}>
              <Translate text="app.footer.title" />
            </Typography>
            <Box>
              <Stack direction="row" justifyContent="center" alignItems="flex-start" gap={4}>
                {options.map(option => renderOption({ ...option, hoverColor: secondary.main }))}
              </Stack>
            </Box>
            <Stack direction="row" mt={8} sx={{ opacity: 0.75 }} spacing={1}>
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
