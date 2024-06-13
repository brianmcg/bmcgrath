import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import LanguageIcon from '@mui/icons-material/Language';
import Translate from '@components/Translate';
import Skill from './components/Skill';

const skills = [{
  title: <Translate text="app.main.skills.languages.title" />,
  icon: <LanguageIcon fontSize="large" />,
  body: <Translate text="app.main.skills.languages.body" />,
  items: ['Javascript', 'Typescript', 'HTML', 'CSS', 'Sass', 'Ruby', 'Java', 'MySQL'],
}, {
  title: <Translate text="app.main.skills.libraries.title" />,
  body: <Translate text="app.main.skills.libraries.body" />,
  icon: <CodeIcon fontSize="large" />,
  items: ['React', 'Next.js', 'Backbone.js', 'D3.js', 'Node.js', 'Pixi.js', 'Highcharts.js', 'Ruby on Rails'],
}, {
  title: <Translate text="app.main.skills.tools.title" />,
  icon: <ComputerIcon fontSize="large" />,
  body: <Translate text="app.main.skills.tools.body" />,
  items: ['Git', 'Github', 'Storybook', 'Docker', 'Webpack', 'Vite',' Material UI', 'Bootstrap'],
}];

function renderSkill({ title, body, items, icon }, key) {
  return (
    <Grid item key={key} xs={12} md={4}>
      <Skill title={title} body={body} items={items} icon={icon} />
    </Grid>
  );
}

export default function Skills() {
  return (
    <Container sx={{ mt: 8, mb: 8 }}>
      <Card sx= {{ p: 4 }}>
        <Typography variant="h3" align="center">
          <Translate text="app.main.skills.title" />
        </Typography>
        <CardContent>
          <Grid container spacing={2}>
            {skills.map((skill, i) => renderSkill(skill, i))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
