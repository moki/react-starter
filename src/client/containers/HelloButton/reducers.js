/* eslint-disable import/prefer-default-export */
// @flow
import Immutable from 'immutable';
import type { fromJS as Immut } from 'immutable';

import { SAY_HELLO } from './constants';

const initialState = Immutable.fromJS({
  message: 'Initial reducer message',
});

const helloReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SAY_HELLO:
      return state.set('message', action.payload);
    default:
      return state;
  }
};

export default helloReducer;
