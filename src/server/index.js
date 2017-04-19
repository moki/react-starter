/* eslint-disable no-console */
// @flow
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
  console.log(`Project ready, visit: http://localhost:${PORT}/\nenvironment: ${isProduction ? 'production' : 'development'}`);
});

console.log(PROJECT_NAME);
