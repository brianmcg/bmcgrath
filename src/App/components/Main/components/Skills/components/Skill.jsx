import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function renderListItem(item) {
  return (
    <Typography variant="body2" key={item} gutterBottom textAlign="center">
      {item}
    </Typography>
  );
}

export default function Skill({ title, description, items, icon }) {
  return (
    <Card elevation={3} sx={{ height: '100%' }}>
      <CardContent>
        <Stack direction="column" alignItems="center" justifyContent="center" spacing={2}>
          <Stack color="secondary.main">{icon}</Stack>
          <Typography sx={{ mb: 2 }} variant="h5">{title}</Typography>
          <Typography paragraph sx={{ mb: 0 }} align="center">{description}</Typography>
          <Box>
            <Stack mt={2} mb={2}>
              {items.map(item => renderListItem(item))}
            </Stack>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
