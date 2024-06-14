import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Translate from '@components/Translate';

export default function Projects() {
  return (
    <Container sx={{ mt: 8, mb: 8 }}>
      <Box mb={2}>
        <Typography variant="h3" align="center">
          <Translate text="app.main.projects.title" />
        </Typography>
      </Box>
      <Card elevation={3} sx= {{ p: 4 }}>
        <CardContent>
          <Grid container spacing={2}>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
