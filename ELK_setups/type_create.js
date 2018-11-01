"use strict";
var config = require('./config');
const http = require('http');

var options = {
  host: config.server.ELK,
  path: '/pondus/weights/_mapping',
  port: '9200',
  method: 'PUT',
  headers: {
      'Content-Type': 'application/json;charset=UTF-8'      
  }
};

var data = JSON.stringify({
  "weights": {
    "properties": {
      "name": {
        "type": "keyword"
      },
      "kilogram": {
        "type": "float"
      },
      "stones": {
        "type": "float"
      },
      "created_at": {
        "type": "date",
        "format": "yyyy'-'MM'-'dd' 'HH':'mm'"
      }
    }
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


