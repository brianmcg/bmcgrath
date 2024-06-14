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
      <Stack direction="column" alignItems="center" justifyContent="center" spacing={2}>
        <Stack color="primary.dark">{icon}</Stack>
        <Typography sx={{ mb: 2 }} variant="h5">{title}</Typography>
        <Typography paragraph sx={{ mb: 0 }} align="center">{body}</Typography>
        <Box>
          <Stack mt={2}>
            {items.map(item => renderListItem(item))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
