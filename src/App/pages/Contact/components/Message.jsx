import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Message({ icon, text }) {
  return (
    <Container>
      <Stack direction="row" spacing={1} alignItems="center" justifyContent="center"  mt={8} mb={4}>
        {icon}
        {text ? <Typography variant="h6">{text}</Typography> : null}
      </Stack>
    </Container>
  );
}
