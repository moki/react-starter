// @flow
/* eslint-disable no-console */

import Class from './class';

const instance = new Class('Classy');

console.log(instance.action());

console.log(`Hello ${(() => 'ES6')()}`);
