import Grid from '@mui/material/Grid';
import Translate from '@components/Translate';
import Section from '@components/Section';
import Project from './components/Project';

const projects = [{
  title: <Translate text="app.main.projects.rugby.title" />,
}, {
  title: <Translate text="app.main.projects.boom.title" />,
}];

function renderProject(key, { title }) {
  return (
    <Grid key={key} item xs={12} sm={6}>
      <Project title={title} />
    </Grid>
  );
}

export default function Projects() {
  return (
    <Section title={<Translate text="app.main.projects.title" />}>
      <Grid container spacing={4}>
        {projects.map((project, i) => renderProject(i, project))}
      </Grid>
    </Section>
  );
}
