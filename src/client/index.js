// @flow
/* eslint-disable global-require, no-underscore-dangle */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import App from './app';
import helloReducer from 'containers/HelloButton/reducers';
import helloAsyncReducer from 'containers/AsyncButton/reducers';

import { APP_CONTAINER_SELECTOR } from 'shared/config';
import { isProduction } from 'shared/util';

const rootElement = document.querySelector(APP_CONTAINER_SELECTOR);

const composeEnhancers = (
  isProduction
    ? null
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const store = createStore(
  combineReducers({
    hello: helloReducer,
    helloAsync: helloAsyncReducer,
  }),
  composeEnhancers(
    applyMiddleware(thunkMiddleware),
  ),
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
