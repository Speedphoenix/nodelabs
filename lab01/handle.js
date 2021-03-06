const url = require('url');
const qs = require('querystring');

const serverHandle = function (req, res) {
  const route = url.parse(req.url);
  const path = route.pathname;
  const params = qs.parse(route.query);

  res.writeHead(200, {'Content-Type': 'text/plain'});

  if (path === '/hello' && 'name' in params) {
    if (['Leonardo', 'leonardo', 'Leo', 'leo'].includes(params['name']))
      res.write('Why am I here...');
    else
      res.write('Hey ' + params['name']);
  } else if (path === '/hello') {
    res.write('hey man!');
  } else {
    res.write('Go to /hello to receive greetings\nYou can optionally give your name in query strings');
  }
  res.end();
}

module.exports = {
  serverHandle,
};
