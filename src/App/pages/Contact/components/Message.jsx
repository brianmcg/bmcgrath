import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import ErrorIcon from '@mui/icons-material/Error';

export default function Message({ icon, text }) {
  return (
    <Container>
      <Stack direction="row" spacing={1} alignItems="center" justifyContent="center"  mt={4} mb={4}>
        {icon}
        <Typography variant="h6">{text}</Typography>
      </Stack>
    </Container>
  );
}
