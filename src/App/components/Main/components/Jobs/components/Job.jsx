import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ExpandMore = styled((props) => {
  const { onClick, children, className } = props;
  return (<IconButton
    sx={{ color: 'primary.main', margin: 'auto' }}
    className={className}
    onClick={onClick}
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

  return (
    <Card elevation={3}>
      <CardContent>
        <Stack
          direction={{ xs: 'column' }}
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
        >
          <Typography align="right" sx={{ fontSize: { xs: 12, sm: 20 }}} variant="h6">
            {title}
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
            <CalendarMonthIcon sx={{ color: 'secondary.main' }} />
            <Typography align="center" sx={{ fontSize: { xs: 12, sm: 20 }}} variant="h6">{time}</Typography>
          </Stack>
          <ExpandMore expand={expanded} onClick={handleExpandClick}>
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
          <Stack direction="row" spacing={1}>
            {skills.map((skill, i) => <Chip color="secondary" key={i} label={skill} />)}
          </Stack>
        </CardContent>
      </Collapse>

    </Card>
  );
}
