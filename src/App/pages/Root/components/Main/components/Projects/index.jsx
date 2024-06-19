import Grid from '@mui/material/Grid';
import Translate from '@components/Translate';
import Section from '@components/Section';
import Project from './components/Project';
import SportsRugbyIcon from '@mui/icons-material/SportsRugby';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { RUGBY_RANKINGS_URL, BOOM_URL } from '@constants/urls';

const projects = [{
  title: <Translate text="app.root.main.projects.rugby.title" />,
  icon: <SportsRugbyIcon sx={{ color: 'secondary.main' }} />,
  description: <Translate text="app.root.main.projects.rugby.description" />,
  url: RUGBY_RANKINGS_URL,
}, {
  title: <Translate text="app.root.main.projects.boom.title" />,
  icon: <SportsEsportsIcon sx={{ color: 'secondary.main' }}  />,
  description: <Translate text="app.root.main.projects.boom.description" />,
  url: BOOM_URL,
}];

function renderProject(key, { title, icon, description, url }) {
  return (
    <Grid key={key} item xs={12} sm={6}>
      <Project title={title} icon={icon} description={description} url={url} />
    </Grid>
  );
}

export default function Projects() {
  return (
    <Section title={<Translate text="app.root.main.projects.title" />}>
      <Grid container spacing={4}>
        {projects.map((project, i) => renderProject(i, project))}
      </Grid>
    </Section>
  );
}
