const express = require('express');
const { httpRequest } = require('../utils/httpRequest');

const router = express.Router();

const defaultModel = {
  method: 'GET',
  uri: 'https://api.github.com/users',
  headers: {
    Authorization: process.env.GITHUB_TOKEN,
    'User-Agent': 'Test App',
  },
  body: null,
  json: true,
};

router.get('/', async (req, res) => {
  httpRequest(defaultModel, (result) => {
    return result ? res.status(200).json(result) : res.status(400).send(null);
  });
});

router.get('/:userName', async (req, res) => {
  console.log('req.params.userName :', req.params.userName);
  httpRequest({
    ...defaultModel,
    path: req.params.userName,
  }, (result) => {
    return result ? res.status(200).json(result) : res.status(400).send({ success: false });
  });
});

module.exports = router;
