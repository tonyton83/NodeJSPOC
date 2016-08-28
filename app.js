var request = require('request');
var process = require('process');

request('http://www.google.ca').pipe(process.stdout);   