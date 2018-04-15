const express = require('express');
const { httpRequest } = require('../utils/httpRequest');

const router = express.Router();

const defaultModel = {
  method: 'GET',
  uri: 'https://api.github.com/orgs',
  headers: {
    Authorization: process.env.GITHUB_TOKEN || null,
    'User-Agent': 'Test App',
  },
  body: null,
  json: true,
};

// TO DO : create route for /organizations (new file?)
// edit an organisation??

router.get('/', async (req, res) => {
  res.status(200).json({
    success: false, message: '/orgs doesn\'t exist, instead you should use /organizations or /orgs/<login of an organization>',
  });
});


router.get('/:org', async (req, res) => {
  httpRequest({ ...defaultModel, path: req.params.org }, (result) => {
    return result ? res.status(200).json(result) : res.status(400).send(null);
  });
});


module.exports = router;
