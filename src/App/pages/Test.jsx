import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { post } from '@utils/api';

export default function Test() {
  async function onClick() {
    const newPost = {
      name: 'Brian',
      address: 'foo@bar.com',
      message: 'Hello World!',
    };

    try {
      const response = await post('posts', newPost);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container sx={{ mt: 8 }}>
      <Box textAlign='center'>
        <Button
          variant="outlined"
          sx={{ borderRadius: 50 }}
          onClick={onClick}
        >
          test
        </Button>
      </Box>
    </Container>
  );
}
