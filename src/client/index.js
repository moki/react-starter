// @flow
/* eslint-disable global-require */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app';

import { APP_CONTAINER_SELECTOR } from 'shared/config';

const rootElement = document.querySelector(APP_CONTAINER_SELECTOR);

const Wrap = Component => <AppContainer><Component /></AppContainer>;

ReactDOM.render(Wrap(App), rootElement);

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./app', () => {
    const Next = require('./app').default;
    ReactDOM.render(Wrap(Next), rootElement);
  });
}
