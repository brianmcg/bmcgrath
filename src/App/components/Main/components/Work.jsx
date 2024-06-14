import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Translate from '@components/Translate';

export default function Experience() {
  return (
    <Container sx={{ mt: 8, mb: 8 }}>
      <Card sx= {{ p: 4 }}>
        <Typography variant="h3" align="center">
          <Translate text="app.main.work.title" />
        </Typography>
        <CardContent>
          <Grid container spacing={2}>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
