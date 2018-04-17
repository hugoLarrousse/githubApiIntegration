/* ------------------------------------------
 HTTP Request factory
 --------------------------------------------- */
const request = require('request');
const isObject = require('lodash/isObject');

const isResponseOK = (error, response) => {
  if (error) {
    console.log('error :', error);
    return false;
  }
  if (response && response.statusCode !== 200) {
    console.log('statusCode:', response && response.statusCode);
    return false;
  }
  return true;
};

const makeOptions = options => {
  if (!isObject(options)) {
    throw new Error('options is not an object');
  }
  const {
    uri,
    method,
    qs,
    path,
    body,
    headers,
  } = options;
  if (!uri) {
    throw new Error('url is not defined');
  }
  if (qs && !(isObject(qs) || typeof qs === 'string')) {
    throw new Error('qs is not a string or object ({ key: value })');
  }
  if (body && !isObject(body)) {
    throw new Error('body is not an object');
  }
  if (headers && !isObject(headers)) {
    throw new Error('headers is not an object');
  }
  const url = path !== undefined ? `${uri}/${path}` : uri;

  return {
    uri: url,
    method: method || 'GET',
    ...qs ? { qs } : {},
    ...body ? { body } : {},
    ...headers ? { headers } : {},
    json: true,
  };
};

const httpRequest = (options) => new Promise((resolve) => {
  request(makeOptions(options), (error, response, body) =>
    resolve(isResponseOK(error, response) ? body : null));
});

exports.httpRequest = httpRequest;
