'use strict';

// define dotenv
require('dotenv').config();


const server = require('./src/server.js');

// here if the port is not working it will try the other one
server.start(process.env.PORT || 3001)
