import Grid from '@mui/material/Grid';
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import LanguageIcon from '@mui/icons-material/Language';
import Translate from '@components/Translate';
import Section from '@components/Section';
import Skill from './components/Skill';

const skills = [{
  title: <Translate text="app.main.skills.languages.title" />,
  icon: <LanguageIcon fontSize="large" />,
  description: <Translate text="app.main.skills.languages.description" />,
  items: ['Javascript', 'Typescript', 'HTML', 'CSS', 'Sass', 'Ruby', 'Java', 'MySQL'],
}, {
  title: <Translate text="app.main.skills.libraries.title" />,
  description: <Translate text="app.main.skills.libraries.description" />,
  icon: <CodeIcon fontSize="large" />,
  items: ['React', 'Next.js', 'Backbone.js', 'D3.js', 'Node.js', 'Pixi.js', 'Highcharts.js', 'Ruby on Rails'],
}, {
  title: <Translate text="app.main.skills.tools.title" />,
  icon: <ComputerIcon fontSize="large" />,
  description: <Translate text="app.main.skills.tools.description" />,
  items: ['Git', 'Github', 'Storybook', 'Docker', 'Webpack', 'Vite',' Material UI', 'Bootstrap'],
}];

function renderSkill(key, { title, description, items, icon }) {
  return (
    <Grid item key={key} xs={12} md={4}>
      <Skill
        title={title}
        description={description}
        items={items}
        icon={icon}
      />
    </Grid>
  );
}

export default function Skills() {
  return (
    <Section title={<Translate text="app.main.skills.title" />}>
      <Grid container spacing={4}>
        {skills.map((skill, i) => renderSkill(i, skill))}
      </Grid>
    </Section>
  );
}
