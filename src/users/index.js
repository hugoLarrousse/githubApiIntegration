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

router.get('/:username', async (req, res) => {
  httpRequest({
    ...defaultModel,
    path: req.params.username,
  }, (result) => {
    return result ? res.status(200).json(result) : res.status(400).send({ success: false });
  });
});

// TO DO : create route for /users/:username/orgs to get list of  organizations of a user

module.exports = router;
