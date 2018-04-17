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

router.get('/', async (req, res) => {
  const result = await httpRequest(defaultModel);
  return result ? res.status(200).json(result) : res.status(400).send(null);
});

router.patch('/', async (req, res) => {
  const result = await httpRequest({
    ...defaultModel,
    method: 'PATCH',
    body: req.body,
  });

  return result ? res.status(200).json(result) : res.status(400).send(null);
});

router.get('/teams', async (req, res) => {
  const results = await httpRequest({ ...defaultModel, uri: 'https://api.github.com/user/teams' });
  if (!results) {
    return res.status(400).send({ success: false, message: 'No team' });
  }

  const arrayTeamsMembers = [];
  for (const element of results) {
    arrayTeamsMembers.push(await httpRequest({ ...defaultModel, uri: `https://api.github.com/teams/${element.id}/members` }));
  }
  return arrayTeamsMembers ? res.status(200).json(arrayTeamsMembers) : res.status(400).send(null);
});

// TO DO : create route for /user/orgs to get list of your organizations

module.exports = router;
