"use strict";
var config = require('./config');
const http = require('http');

var options = {
  host: config.server.ELK,
  path: '/pondus/',
  port: '9200',
  method: 'PUT',
  headers: {
      'Content-Type': 'application/json;charset=UTF-8'      
  }
};

var data = JSON.stringify({
  "index": {
    "number_of_replicas": 0
  }
});

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});
req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.write(data + '\n');
req.end();






