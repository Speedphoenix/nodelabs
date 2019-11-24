import express = require('express');
import metrics = require('./metrics');

import { MetricsHandler } from './metrics'

const app = express();
const port: string = process.env.PORT || '8096';

app.use(express.static('public'));

app.set('views', 'view');
app.set('view engine', 'ejs');

app.get(
  '/',
  (req: any, res: any) => res.render('index')
);

app.get(
  '/hello',
  (req: any, res: any) => res.render('hello.ejs', {name: false})
);

app.get(
  '/hello/:name',
  (req: any, res: any) => res.render('hello.ejs', {name: req.params.name})
);

app.get('/metrics.json', (req: any, res: any) => {
  MetricsHandler.get((err: Error | null, result?: any) => {
    if (err) {
      throw err;
    }
    res.json(result)
  });
});

app.listen(port, (err: Error) => {
  if (err) {
    throw err;
  }
  console.log(`server is listening on port ${port}`);
});
