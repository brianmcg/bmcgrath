import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Section({ title, children }) {
  return (
    <section>
      <Container sx={{ mt: 8, mb: 8 }}>
        <Box mb={3}>
          <Typography variant="h3" align="center">
            {title}
          </Typography>
        </Box>
        {children}
      </Container>
    </section>
  );
}
