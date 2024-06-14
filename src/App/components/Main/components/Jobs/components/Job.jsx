import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ExpandMore = styled((props) => {
  const { onClick, children, className } = props;
  return <IconButton className={className} onClick={onClick}>{children}</IconButton>;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Job({ title, time, location, detail }) {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => setExpanded(!expanded);

  return (
    <Card elevation={3}>

      <CardContent>
        <Stack direction="row" textAlign="center" justifyContent="space-between">
          <Typography variant="h6">{title}</Typography>
          <Stack direction="row" textAlign="center" justifyContent="center" spacing={2}>
            <Typography variant="h6">{time}</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={1}>
          <LocationOnIcon sx={{ color: 'primary.main' }} />
          <Typography variant="body1" color="text.secondary">{location}</Typography>
        </Stack>
      </CardContent>

      <CardActions>
        <ExpandMore expand={expanded} onClick={handleExpandClick}>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {detail.map((p, i) => <Typography key={i} paragraph>{p}</Typography>)}
        </CardContent>
      </Collapse>

    </Card>
  );
}
