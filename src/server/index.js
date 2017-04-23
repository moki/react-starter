/* eslint-disable no-console, global-require, import/no-extraneous-dependencies */
// @flow
import compression from 'compression';
import express from 'express';

import { PROJECT_NAME, STATIC_PATH, PORT } from 'shared/config';
import { isProduction } from 'shared/util';
import { render } from 'server/render';

import { helloRoute } from 'shared/routes';

const app = express();

app.use(compression());
app.use(STATIC_PATH, express.static('dist'));

if (!isProduction) {
  const webpack = require('webpack');
  const webpackConfig = require('../../internals/webpack/webpack.dev.babel.js').default;
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.get('/', (req, res) => {
  res.send(render(PROJECT_NAME));
});

app.get(helloRoute(), (req, res) =>
  res.json({ message: `Hello from the server! (received ${req.params.num})` }),
);

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT} ${
      isProduction
      ? '(production)'
      : '(development)'
    }.`,
  );
});
