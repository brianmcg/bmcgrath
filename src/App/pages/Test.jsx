import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { post } from '@utils/api';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';

const newPost = {
  name: 'Brian',
  address: 'foo@bar.com',
  message: 'Hello World!',
};

export default function Test() {
  const [status, setStatus] = useState(null);

  async function onClickTest() {
    try {
      await post('posts', newPost);
      setStatus(<CheckCircleIcon color="success" />);
    } catch (error) {
      setStatus(<ErrorIcon color="error" />);
    }
  }

  function onClickReset() {
    setStatus(null);
  }

  return (
    <Container sx={{ mt: 8 }}>
      <Stack direction="row" spacing={2} align="center" justifyContent="center">
        <Button variant="outlined" onClick={onClickTest}>
          test
        </Button>
        <IconButton onClick={onClickReset}>
          <RefreshIcon color="primary" sx={{ height: 32, width: 32 }} />
        </IconButton>
      </Stack>
      <Box textAlign="center" p={4}>
        {status}
      </Box>
    </Container>
  );
}
