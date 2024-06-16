import Grid from '@mui/material/Grid';
import Translate from '@components/Translate';
import Section from '@components/Section';
import Job from './components/Job';

const jobs = [{
  title: <Translate text="app.root.main.jobs.edge.title" />,
  location: <Translate text="app.root.main.jobs.edge.location" />,
  time: '2016 - 2023',
  detail: [
    <Translate key="p1" text="app.root.main.jobs.edge.p1" />,
    <Translate key="p2" text="app.root.main.jobs.edge.p2" />,
    <Translate key="p3" text="app.root.main.jobs.edge.p3" />,
  ],
  skills: ['Javascript', 'HTML', 'CSS', 'Ruby on Rails', 'Backbone', 'Angular', 'React', 'MySQL'],
}, {
  title: <Translate text="app.root.main.jobs.ericsson.title" />,
  time: '2013 - 2016',
  location: <Translate text="app.root.main.jobs.ericsson.location" />,
  detail: [
    <Translate key="p1" text="app.root.main.jobs.ericsson.p1" />,
    <Translate key="p2" text="app.root.main.jobs.ericsson.p2" />,
    <Translate key="p3" text="app.root.main.jobs.ericsson.p3" />,
    <Translate key="p3" text="app.root.main.jobs.ericsson.p4" />,
  ],
  skills: ['Javascript', 'HTML', 'CSS', 'Node', 'Backbone', 'Java'],
}];

function renderJob(key, { title, time, location, detail, skills }) {
  return (
    <Grid key={key} item xs={12}>
      <Job
        title={title}
        time={time}
        location={location}
        detail={detail}
        skills={skills}
      />
    </Grid>
  );
}

export default function Jobs() {
  return (
    <Section title={<Translate text="app.root.main.jobs.title" />}>
      <Grid container spacing={4}>
        {jobs.map((job, i) => renderJob(i, job))}
      </Grid>
    </Section>
  );
}
