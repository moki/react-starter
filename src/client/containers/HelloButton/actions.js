/* eslint-disable import/prefer-default-export */
// @flow
import { createAction } from 'redux-actions';
import { SAY_HELLO } from './constants';

export const sayHello = createAction(SAY_HELLO);
