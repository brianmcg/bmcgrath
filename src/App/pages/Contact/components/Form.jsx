import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Translate from '@components/Translate';

const MY_EMAIL = 'brian.joseph.mcgrath@gmail.com';
const MY_NAME = 'Brian McGrath';
const SUBJECT = 'Message from bmcgrath.net';
const MAILJET_URL = 'https://api.mailjet.com/v3/send';
const API_KEY = 'b94e3d4204e43a7b3b7116e8f2e16646';
const SECRET_KEY = 'bc76aa2d6eeb3e2be1c3e3998b59a5c0';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateName(name) {
  return Boolean(name) && name.length > 0;
}

function validateEmail(email) {
  return EMAIL_REGEX.test(email);
}

function validateMessage(message) {
  return Boolean(message) && message.length > 0;
}

export default function Form() {
  const navigateTo = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const isSubmitDisabled = !(validateName(name) && validateEmail(email) && validateMessage(message));

  function handleChangeName(e) {
    const name = e.target.value;
    setNameError(!validateName(name));
    setName(name);
  }

  function handleChangeEmail(e) {
    const email = e.target.value;
    setEmail(email);
    setEmailError(!validateEmail(email));
  }

  function handleChangeMessage(e) {
    const message = e.target.value;
    setMessage(message);
    setMessageError(!validateMessage(message));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // sendEmail(name, email, message);
    navigateTo('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3} alignItems="center" justifyContent="space-between" mt={4} mb={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="name"
            label=<Translate text="app.contact.name" />
            error={nameError}
            helperText={ nameError ? <Translate text="app.contact.errors.common" /> : ' ' }
            autoComplete="off"
            required
            fullWidth
            onChange={handleChangeName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            label=<Translate text="app.contact.email" />
            error={emailError}
            helperText={ emailError ? <Translate text="app.contact.errors.email" /> : ' ' }
            autoComplete="off"
            required
            fullWidth
            onChange={handleChangeEmail}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="message"
            label=<Translate text="app.contact.message" />
            error={messageError}
            helperText={ messageError ? <Translate text="app.contact.errors.common" /> : ' ' }
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
