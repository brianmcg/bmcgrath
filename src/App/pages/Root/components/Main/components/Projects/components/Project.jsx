import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Translate from '@components/Translate';
import LaunchIcon from '@mui/icons-material/Launch';
import Button from '@mui/material/Button';

export default function Project({ title, icon, description, url }) {
  return (
    <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

      <CardContent sx={{display: 'flex', justifyContent: 'center' }}>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
          {icon}
          <Typography variant="h5">{title}</Typography>
        </Stack>
      </CardContent>

      <CardContent sx={{ flex: 1, bdisplay: 'flex', justifyContent: 'center' }}>
        <Typography variant="body1">{description}</Typography>
      </CardContent>

      <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
        <Link href={url} target="_blank">
          <Button variant="outlined" startIcon={<LaunchIcon />}>
            <Translate text="app.root.main.projects.common.launch" />
          </Button>
        </Link>
      </CardContent>

    </Card>
  );
}
