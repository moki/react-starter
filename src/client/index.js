// @flow
/* eslint-disable global-require, no-underscore-dangle */
import 'babel-polyfill';
import React from 'react';
import Immutable from 'immutable';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';

import Socket from './socket';
import App from 'shared/app';
import helloReducer from 'containers/HelloButton/reducers';
import helloAsyncReducer from 'containers/AsyncButton/reducers';

import { APP_CONTAINER_SELECTOR, JSS_SSR_SELECTOR } from 'shared/config';
import { isProduction } from 'shared/util';

const rootElement = document.querySelector(APP_CONTAINER_SELECTOR);

const composeEnhancers = (
  isProduction
    ? null
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const preloadedState = window.__PRELOADED_STATE__;

const store = createStore(
  combineReducers({
    hello: helloReducer,
    helloAsync: helloAsyncReducer,
  }),
  {
    helloAsync: Immutable.fromJS(preloadedState.helloAsync),
    hello: Immutable.fromJS(preloadedState.hello),
  },
  composeEnhancers(
    applyMiddleware(thunkMiddleware),
  ),
);

const Wrap = (Component, reduxStore) =>
  <Provider store={reduxStore}>
    <BrowserRouter>
      <AppContainer>
        <Component />
      </AppContainer>
    </BrowserRouter>
  </Provider>;

ReactDOM.render(Wrap(App, store), rootElement);

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('../shared/app', () => {
    const Next = require('../shared/app').default;
    ReactDOM.render(Wrap(Next, store), rootElement);
  });
}

const jssServerSide = document.querySelector(JSS_SSR_SELECTOR);
// flow-disable-next-line
jssServerSide.parentNode.removeChild(jssServerSide);

Socket(store);
