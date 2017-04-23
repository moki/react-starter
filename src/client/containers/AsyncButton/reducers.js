import Immutable from 'immutable';
import type { fromJS as Immut } from 'immutable';

import {
  SAY_HELLO_REQUEST,
  SAY_HELLO_SUCCESS,
  SAY_HELLO_FAILURE,
} from './constants';

const intitialState = Immutable.fromJS({
  messageAsync: 'Initial reducer message for async call',
});

const helloAsyncReducer = (
  state: Immut = intitialState,
  action: { type: string, payload: any },
) => {
  switch (action.type) {
    case SAY_HELLO_REQUEST:
      return state.set('messageAsync', 'Loading . . .');
    case SAY_HELLO_SUCCESS:
      return state.set('messageAsync', action.payload);
    case SAY_HELLO_FAILURE:
      return state.set('messageAsync', `${action.payload}, please check your connection!`);
    default:
      return state;
  }
};

export default helloAsyncReducer;
