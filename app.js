var request = require('request');

request('http://www.google.ca').pipe(process.stdout);   