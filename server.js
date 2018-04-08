const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
require('dotenv').load({ path: '.env' });

const app = express();

const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

console.log('process.env.GITHUB_TOKEN :', process.env.GITHUB_TOKEN);

const options = {
  method: 'GET',
  uri: 'https://api.github.com/user',
  headers: {
    Authorization: process.env.GITHUB_TOKEN,
    'User-Agent': 'Test App'
  }
}

const optionsPatch = {
  method: 'PATCH',
  uri: 'https://api.github.com/user',
  headers: {
    Authorization: process.env.GITHUB_TOKEN,
    'User-Agent': 'Test App'
  },
  body: {
    name: 'Hugo Larrousse'
  },
  json: true
}

app.get('/', async (req, res) => {
  console.log('GET');
  
  request(options, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    res.status(200).json(JSON.parse(body));
  });
});

app.patch('/', async (req, res) => {
  console.log('PATCH');

  request(optionsPatch, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    res.status(200).json(body);
  });
});

app.listen(port, function (res) {
  console.log(`Server is running on port ${port}`);
});
