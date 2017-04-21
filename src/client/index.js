// @flow
/* eslint-disable global-require, no-underscore-dangle */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './app';
import helloReducer from 'containers/HelloButton/reducers';

import { APP_CONTAINER_SELECTOR } from 'shared/config';
import { isProduction } from 'shared/util';

const rootElement = document.querySelector(APP_CONTAINER_SELECTOR);

const store = createStore(
  combineReducers({
    hello: helloReducer,
  }),
  isProduction
    ? undefined
    : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const Wrap = (Component, reduxStore) =>
  <Provider store={reduxStore}>
    <AppContainer>
      <Component />
    </AppContainer>
  </Provider>;

ReactDOM.render(Wrap(App, store), rootElement);

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./app', () => {
    const Next = require('./app').default;
    ReactDOM.render(Wrap(Next, store), rootElement);
  });
}
