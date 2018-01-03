require('babel-polyfill');
var page = require('page');

require('whatwg-fetch');
require('./homepage');
require('./signup');
require('./signin');
require('./footer');

page();