// @flow
import Immutable from 'immutable';
import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import helloAsyncReducer from 'shared/containers/AsyncButton/reducers';

import helloReducer from 'shared/containers/HelloButton/reducers';

const initialStore = (state: ?Object) => {
  const preloadedState = state ? {} : undefined;

  if (state && state.helloAsync) {
    // flow-disable-next-line
    preloadedState.helloAsync = helloAsyncReducer(undefined, {})
      .merge(Immutable.fromJS(state.helloAsync));
  }

  if (state && state.hello) {
    // flow-disable-next-line
    preloadedState.hello = helloReducer(undefined, {})
      .merge(Immutable.fromJS(state.hello));
  }

  return createStore(
    combineReducers({ helloAsync: helloAsyncReducer, hello: helloReducer }),
    preloadedState,
    applyMiddleware(thunkMiddleware),
  );
};

export default initialStore;
