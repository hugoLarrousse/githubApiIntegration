const express = require('express');
const { httpRequest } = require('../utils/httpRequest');

const router = express.Router();

const defaultModel = {
  method: 'GET',
  uri: 'https://api.github.com/events',
  headers: {
    Authorization: process.env.GITHUB_TOKEN,
    'User-Agent': 'Test App',
  },
  body: null,
  json: true,
};


router.get('/', async (req, res) => {
  const result = await httpRequest(defaultModel);
  return result ? res.status(200).json(result) : res.status(400).send(null);
});


module.exports = router;
