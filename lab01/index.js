const http = require('http');
const { serverHandle } = require('./handle');

http.createServer(serverHandle).listen(8096);
