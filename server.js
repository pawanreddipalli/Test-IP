//const http = require('http');
const https = require('https');
//exported from app.js
const app = require('./app');

const port = 3000;
const server = https.createServer(app);
server.listen(port);
