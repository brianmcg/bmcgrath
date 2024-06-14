import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Project({ title }) {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h5">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
