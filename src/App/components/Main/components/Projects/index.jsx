import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Translate from '@components/Translate';
import Project from './components/Project';

const projects = [{
  title: <Translate text="app.main.projects.rugby.title" />,
}, {
  title: <Translate text="app.main.projects.boom.title" />,
}];

function renderProject({ title }, key) {
  return (
    <Grid key={key} item xs={6}>
      <Project title={title} />
    </Grid>
  );
}

export default function Projects() {
  return (
    <Container sx={{ mt: 8, mb: 8 }}>
      <Box mb={2}>
        <Typography variant="h3" align="center">
          <Translate text="app.main.projects.title" />
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {projects.map((project, i) => renderProject(project, i))}
      </Grid>
    </Container>
  );
}
