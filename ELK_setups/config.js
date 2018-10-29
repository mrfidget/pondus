"use strict";
var config = {};

config.server = {
    'ELK' : process.env.ELASTIC_HOST || 'localhost'
};

module.exports = config;    