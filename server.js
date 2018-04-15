const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').load({ path: '.env' });

const orgsController = require('./src/orgs');
const userController = require('./src/user');
const usersController = require('./src/users');
const eventsController = require('./src/events');

const app = express();

const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

app.use('/user', userController);

app.use('/orgs', orgsController);
app.use('/user', userController);
app.use('/users', usersController);
app.use('/events', eventsController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
