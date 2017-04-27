// @flow
import { createAction } from 'redux-actions';

import { helloRoute } from 'shared/routes';
import {
  SAY_HELLO_REQUEST,
  SAY_HELLO_SUCCESS,
  SAY_HELLO_FAILURE,
} from './constants';

export const sayHelloRequest = createAction(SAY_HELLO_REQUEST);
export const sayHelloSuccess = createAction(SAY_HELLO_SUCCESS);
export const sayHelloFailure = createAction(SAY_HELLO_FAILURE);

export const sayHelloAsync = (num: number) =>
  (dispatch: Function) => {
    dispatch(sayHelloRequest());

    return fetch(helloRoute(num), { method: 'GET' })
      .then((res) => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then((data) => {
        if (!data.message) throw Error('No message received');
        dispatch(sayHelloSuccess(data.message));
      })
      .catch((e) => {
        dispatch(sayHelloFailure(e));
      });
  };
