import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

function renderListItem(item) {
  return (
    <Typography variant="body2" key={item} gutterBottom textAlign="center">
      {item}
    </Typography>
  );
}

export default function Skill({ title, body, items, icon }) {
  return (
    <Box>
      <Stack direction="column" alignItems="center" justifyContent="center">
        <Box color="primary.main">
          {icon}
        </Box>
        <Typography sx={{ mb: 2 }} variant="h5">
          {title}
        </Typography>
      </Stack>
      <Typography sx={{ mb: 6 }} variant="body1" align="center">
        {body}
      </Typography>
      <Stack>
        {items.map(item => renderListItem(item))}
      </Stack>
    </Box>
  );
}
