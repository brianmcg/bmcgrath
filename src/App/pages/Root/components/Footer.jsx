import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import ArticleIcon from '@mui/icons-material/Article';
import Translate from '@components/Translate';

import logoSrc from '@assets/images/logo-white.svg';

const options = [{
  icon: <LinkedInIcon />,
  label: 'app.root.footer.linkedin',
  href: 'https://www.linkedin.com/in/brianjmcgrath/',
}, {
  icon: <GitHubIcon />,
  label: 'app.root.footer.github',
  href: 'https://github.com/brianmcg',
}, {
  icon: <ArticleIcon />,
  label: 'app.root.footer.cv',
  href: '/CV_Brian_McGrath.pdf',
}];

function renderOption({ icon, label, href, target = '_blank' }) {
  return (
    <Link href={href} target={target} color="inherit">
      <Stack key={href} direction="row" alignItems="center" gap={1}>
        {icon}
        <Typography variant="caption">
          <Translate text={label} />
        </Typography>
      </Stack>
    </Link>
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
        }}
      >
        <Container>
          <Stack justifyContent="center" alignItems="center" spacing={6}>
            <img src={logoSrc} alt="Logo" style={{ height: 48, width: 48, opacity: 0.75 }} />
            <Typography align="center" variant="h6" sx={{ opacity: 0.75, fontSize: { xs: 16, sm: 20 } }}>
              <Translate text="app.root.footer.title" />
            </Typography>
            <Box>
              <Stack direction={{ sx: 'column', sm: 'row' }} justifyContent="center" alignItems="flex-start" gap={4}>
                {options.map(option => renderOption(option))}
              </Stack>
            </Box>
            <Stack direction="row" mt={8} sx={{ opacity: 0.75 }} spacing={1}>
              <CopyrightIcon fontSize="small" />
              <Typography variant="body2">
                <Translate text="app.root.footer.author" />
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </footer>
  );
}
