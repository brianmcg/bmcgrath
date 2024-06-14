import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Translate from '@components/Translate';
import Job from './components/Job';

const jobs = [{
  title: <Translate text="app.main.jobs.edge.title" />,
  location: <Translate text="app.main.jobs.edge.location" />,
  time: '2016 - 2023',
  detail: [
    <Translate key="p1" text="app.main.jobs.edge.p1" />,
    <Translate key="p2" text="app.main.jobs.edge.p2" />,
    <Translate key="p3" text="app.main.jobs.edge.p3" />,
  ],
}, {
  title: <Translate text="app.main.jobs.ericsson.title" />,
  time: '2013 - 2016',
  location: <Translate text="app.main.jobs.ericsson.location" />,
  detail: [
    <Translate key="p1" text="app.main.jobs.ericsson.p1" />,
    <Translate key="p2" text="app.main.jobs.ericsson.p2" />,
    <Translate key="p3" text="app.main.jobs.ericsson.p3" />,
    <Translate key="p3" text="app.main.jobs.ericsson.p4" />,
  ],
}];

function renderJob({ title, time, location, detail }, key) {
  return (
    <Grid key={key} item xs={12}>
      <Job title={title} time={time} location={location} detail={detail} />
    </Grid>
  );
}

export default function Jobs() {
  return (
    <Container sx={{ mt: 8, mb: 8 }}>
      <Box mb={2}>
        <Typography variant="h3" align="center">
          <Translate text="app.main.jobs.title" />
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {jobs.map((job, i) => renderJob(job, i))}
      </Grid>
    </Container>
  );
}
