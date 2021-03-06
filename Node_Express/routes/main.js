const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
  console.log('I see you');
  response.send('ok');
});

router.get('/status', (request, response) => {
  response.status(200).json({ message: 'ok', status: 200 });
});

router.post('/signup', (request, response, next) => {
  if (!request.body) {
    response.status(400).json({ message: 'invalid body', status: 400 });
  } else {
    response.status(200).json({ message: 'ok', status: 200 });
  }
});

router.post('/login', (request, response) => {
  if (!request.body) {
    response.status(400).json({ message: 'invalid body', status: 400 });
  } else {
    response.status(200).json({ message: 'ok', status: 200 });
  }
});

router.post('/logout', (request, response) => {
  if (!request.body) {
    response.status(400).json({ message: 'invalid body', status: 400 });
  } else {
    response.status(200).json({ message: 'ok', status: 200 });
  }
});

router.post('/token', (request, response) => {
  if (!request.body || !request.body.refreshToken) {
    response.status(400).json({ message: 'invalid body', status: 400 });
  } else {
    const { refreshToken } = request.body;
    response.status(200).json(
      { message: `refresh token requested for token: ${refreshToken}`, status: 200 });
  }
});

module.exports = router;