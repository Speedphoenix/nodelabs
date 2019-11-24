express = require('express');
path = require('path');
metrics = require('./metrics');
app = express();

app.use(express.static(path.join(__dirname, 'public')));
// app.set('port', 1337);

// app.use(express.static('public'))

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');

app.get(
  '/',
  (req, res) => res.render('index')
);

app.get(
  '/hello',
  (req, res) => res.render('hello.ejs', {name: false})
);

app.get(
  '/hello/:name',
  (req, res) => res.render('hello.ejs', {name: req.params.name})
);

app.get('/metrics.json', (req, res) => {
  metrics.get((err, data) => {
    if (err) throw err;
    res.status(200).json(data);
  });
});

app.listen(8096);
