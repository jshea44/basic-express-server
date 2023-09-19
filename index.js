'use strict';

const server = require('./lib/server.js');
require('dotenv').config();
PORT = process.env.PORT || 3001;

server.start(PORT);
