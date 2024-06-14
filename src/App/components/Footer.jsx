import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { useTheme } from '@mui/material';
import Translate from '@components/Translate';

import Logo from '@assets/icons/logo.svg';

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
  href: 'mailto: brian.joseph.mcgrath@gmail.com',
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
  const { primary, secondary } = palette;

  console.log(primary.dark);

  return (
    <footer>
      <Box
        sx={{
          color: 'common.white',
          padding: 8,
          backgroundImage: `linear-gradient(${primary.main}, ${primary.dark})`,
          borderTop: `solid 4px ${secondary.main}`,
        }}>
        <Container>
          <Stack justifyContent="center" alignItems="center" spacing={6}>
            {/*<CodeIcon sx={{ fontSize: 64 }} />*/}
            <img src={Logo} alt="Logo" style={{ height: 64, width: 64 }} />
            <Typography variant="h6" sx={{ opacity: 0.75 }}>
              <Translate text="app.footer.title" />
            </Typography>
            <Box sx={{}}>
              <Stack direction="row" justifyContent="center" alignItems="flex-start" gap={4}>
                {options.map(option => renderOption(option))}
              </Stack>
            </Box>
            <Stack direction="row" mt={8} sx={{ opacity: 0.75 }}>
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
