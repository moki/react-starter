// @flow
/* eslint-disable no-console, global-require, import/no-extraneous-dependencies */
import compression from 'compression';
import express from 'express';
import { Server } from 'http';
import Io from 'socket.io';

import { STATIC_PATH, PORT } from 'shared/config';
import { isProduction } from 'shared/util';

import routing from './routing';
import Socket from './socket';

const app = express();
// flow-disable-next-line
const http = Server(app);
const io = Io(http);
Socket(io);

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

routing(app);

http.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT} ${
      isProduction
      ? '(production)'
      : '(development)'
    }.`,
  );
});
