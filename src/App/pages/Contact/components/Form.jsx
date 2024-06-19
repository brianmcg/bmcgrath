import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Translate from '@components/Translate';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateName(name) {
  return Boolean(name) && name.length > 0;
}

function validateAddress(address) {
  return EMAIL_REGEX.test(address);
}

function validateMessage(message) {
  return Boolean(message) && message.length > 0;
}

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const isSubmitDisabled = !(validateName(name) && validateAddress(address) && validateMessage(message));

  function handleChangeName(e) {
    const name = e.target.value;
    setNameError(!validateName(name));
    setName(name);
  }

  function handleChangeAddress(e) {
    const address = e.target.value;
    setAddress(address);
    setAddressError(!validateAddress(address));
  }

  function handleChangeMessage(e) {
    const message = e.target.value;
    setMessage(message);
    setMessageError(!validateMessage(message));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ name, address, message });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3} alignItems="center" justifyContent="space-between" mt={4} mb={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="name"
            label=<Translate text="app.contact.name" />
            error={nameError}
            helperText={ nameError ? <Translate text="app.contact.form.errors.common" /> : ' ' }
            autoComplete="off"
            required
            fullWidth
            onChange={handleChangeName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="address"
            label=<Translate text="app.contact.email" />
            error={addressError}
            helperText={ addressError ? <Translate text="app.contact.form.errors.address" /> : ' ' }
            autoComplete="off"
            required
            fullWidth
            onChange={handleChangeAddress}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="message"
            label=<Translate text="app.contact.message" />
            error={messageError}
            helperText={ messageError ? <Translate text="app.contact.form.errors.common" /> : ' ' }
            autoComplete="off"
            rows={4}
            multiline
            required
            fullWidth
            onChange={handleChangeMessage}
          />
        </Grid>
        <Grid item xs={12}>
          <Box textAlign='center'>
            <Button
              disabled={isSubmitDisabled}
              variant="outlined"
              type="submit"
              sx={{ borderRadius: 50 }}
              startIcon={<SendIcon />}
            >
              <Translate text="app.contact.submit" />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
