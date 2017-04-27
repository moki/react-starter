// @flow
/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';
import { SAY_HELLO } from './constants';

export const sayHello = createAction(SAY_HELLO);
