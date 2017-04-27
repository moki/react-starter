/* eslint-disable import/prefer-default-export */
// @flow
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import Helmet from 'react-helmet';

import initialStore from './initial-store';
import App from 'shared/app';
import { APP_CONTAINER_CLASS, STATIC_PATH } from 'shared/config';
import { isProduction } from 'shared/util';

const developmentURL = '/dist/bundle.js';
const productionURL = `${STATIC_PATH}/bundle.js`;

const render = (location: string, state: ?Object, routerContext: ?Object = {}) => {
  const store = initialStore(state);

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={routerContext}>
        <App />
      </StaticRouter>
    </Provider>,
  );

  const head = Helmet.rewind();

  return (`<!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${html}</div>
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}</script>
        <script src="${isProduction ? productionURL : developmentURL}"></script>
      </body>
    </html>
  `);
};

export default render;
