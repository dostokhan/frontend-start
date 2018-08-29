const path = require('path');

const PATHS = {
  root: path.join(__dirname),
  source: path.join(__dirname, '../source'),
  app: path.join(__dirname, '../source/app'),
  build: path.join(__dirname, '../build'),
  node: path.join(__dirname, '../node_modules'),

  Libs: path.join(__dirname, '../source/libs'),
  Assets: path.join(__dirname, '../source/assets'),
  Styles: path.join(__dirname, '../source/styles'),

};

const PROTOCOL = '//';

const APP_URL = {
  development: `${PROTOCOL}local.fullstack.imonir.com/`,
  production: `${PROTOCOL}fullstack.imonir.com/`,
};

const API_URL = {
  development: `${PROTOCOL}local.fullstackapi.imonir.com/`,
  production: `${PROTOCOL}fullstackapi.imonir.com/`,
};

const API_URL_BACK = {
  development: 'http://fullstack-backend:8000/',
  production: 'http://fullstack-backend:8000/',
};


exports.HOST = '0.0.0.0';
exports.PORT = 80;
exports.PATHS = PATHS;
exports.API_URL = API_URL;
exports.API_URL_BACK = API_URL_BACK;
exports.APP_URL = APP_URL;
