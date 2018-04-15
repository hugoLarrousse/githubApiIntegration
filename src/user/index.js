const express = require('express');
const { httpRequest } = require('../utils/httpRequest');

const router = express.Router();

const defaultModel = {
  method: 'GET',
  uri: 'https://api.github.com/user',
  headers: {
    Authorization: process.env.GITHUB_TOKEN,
    'User-Agent': 'Test App',
  },
  body: null,
  json: true,
};

// const optionsPatch = {
//   method: 'PATCH',
//   uri: 'https://api.github.com/user',
//   headers: {
//     Authorization: process.env.GITHUB_TOKEN,
//     'User-Agent': 'Test App',
//   },
//   body: {
//     name: 'Hugo Larrousse',
//   },
//   json: true,
// }


router.get('/', async (req, res) => {
  httpRequest(defaultModel, (result) => {
    return result ? res.status(200).json(result) : res.status(400).send(null);
  });
});

router.patch('/', async (req, res) => {
  httpRequest({
    ...defaultModel,
    method: 'PATCH',
    body: req.body,
  }, (result) => {
    return result ? res.status(200).json(result) : res.status(400).send(null);
  });
});

module.exports = router;
