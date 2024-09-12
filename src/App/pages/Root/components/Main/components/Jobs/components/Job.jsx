import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircleIcon from '@mui/icons-material/Circle';

const ExpandMore = styled((props) => {
  const { onClick, children, className, label } = props;
  return (<IconButton
    sx={{ color: 'primary.main', margin: 'auto' }}
    className={className}
    onClick={onClick}
    aria-label={label}
  >
    {children}
  </IconButton>);
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Job({ title, time, location, detail, skills }) {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => setExpanded(!expanded);
  const { t } = useTranslation();

  return (
    <Card elevation={3}>
      <CardContent>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
        >
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems="center" justifyContent="center">
            <Typography align="center" sx={{ fontSize: { xs: 16, md: 20 }}} variant="caption">
              {title}
            </Typography>
            <CircleIcon color="secondary" sx={{ fontSize: { xs: 8, md: 16 } }} />
            <Typography align="center" sx={{ fontSize: { xs: 16, md: 20 }}} variant="caption">{time}</Typography>
          </Stack>
          <ExpandMore expand={expanded} onClick={handleExpandClick} label={t('app.root.main.jobs.expand')}>
            <ExpandMoreIcon />
          </ExpandMore>
        </Stack>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={1}>
            <LocationOnIcon sx={{ color: 'secondary.main' }} />
            <Typography variant="body1" color="text.secondary">{location}</Typography>
          </Stack>
        </CardContent>
        <CardContent>
          {detail.map((p, i) => <Typography key={i} paragraph>{p}</Typography>)}
        </CardContent>
        <CardContent>
          <Grid container spacing={1}>
            {skills.map((skill, i) => <Grid item key={i}><Chip color="secondary" label={skill} /></Grid>)}
          </Grid>
        </CardContent>
      </Collapse>

    </Card>
  );
}
