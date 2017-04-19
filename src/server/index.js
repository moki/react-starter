// @flow
/* eslint-disable no-console */
import compression from 'compression';
import express from 'express';

import { PROJECT_NAME, STATIC_PATH, PORT } from 'shared/config';
import { isProduction } from 'shared/util';
import { render } from 'server/render';

const app = express();

app.use(compression());
app.use(STATIC_PATH, express.static('dist'));
app.use(STATIC_PATH, express.static('public'));

app.get('/', (req, res) => {
  res.send(render(PROJECT_NAME));
});

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT} ${
      isProduction
      ? '(production)'
      : '(development).\nKeep "yarn wds:dev" running in an other terminal'
    }.`,
  );
});

console.log(PROJECT_NAME);
