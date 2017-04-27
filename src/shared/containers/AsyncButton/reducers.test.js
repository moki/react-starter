import {
  sayHelloRequest,
  sayHelloSuccess,
  sayHelloFailure,
} from './actions';

import helloAsyncReducer from './reducers';

let helloAsyncState;

beforeEach(() => {
  helloAsyncState = helloAsyncReducer(undefined, {});
});

test('handle default behavior', () => {
  expect(helloAsyncState.get('messageAsync'))
    .toBe('Initial reducer message for async call');
});

test('handle SAY_HELLO_REQUEST', () => {
  helloAsyncState = helloAsyncReducer(helloAsyncState, sayHelloRequest());
  expect(helloAsyncState.get('messageAsync'))
    .toBe('Loading . . .');
});

test('handle SAY_HELLO_SUCCESS', () => {
  helloAsyncState = helloAsyncReducer(helloAsyncState, sayHelloSuccess('Fetched data'));
  expect(helloAsyncState.get('messageAsync'))
    .toBe('Fetched data');
});

test('handle SAY_HELLO_FAILURE', () => {
  helloAsyncState = helloAsyncReducer(helloAsyncState, sayHelloFailure(new Error('No message received')));
  expect(helloAsyncState.get('messageAsync'))
    .toBe(`${new Error('No message received')}, please check your connection!`);
});
