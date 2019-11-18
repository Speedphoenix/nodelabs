const url = require('url');
const qs = require('querystring');

const serverHandle = function (req, res) {
  const route = url.parse(req.url);
  const path = route.pathname;
  const params = qs.parse(route.query);

  res.writeHead(200, {'Content-Type': 'text/plain'});

  if (path === '/hello' && 'name' in params) {
    res.write('Hey ' + params['name']);
  } else {
    res.write('hey man!');
  }
  res.end();
}

module.exports = {
  serverHandle,
};
