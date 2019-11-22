express = require('express');
path = require('path');
app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('port', 1337);

/*
app.listen(
);
*/

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get(
  '/hello/:name',
  (req, res) => res.render('hello.ejs', {name: req.params.name})
);
