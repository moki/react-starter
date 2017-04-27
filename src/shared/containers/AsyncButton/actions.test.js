import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import { helloRoute } from 'shared/routes';

import {
  sayHelloAsync,
  sayHelloRequest,
  sayHelloSuccess,
  sayHelloFailure,
} from './actions';

const mockStore = configureMockStore([thunkMiddleware]);

afterEach(() => fetchMock.restore());

test('sayHelloAsync success', () => {
  fetchMock.get(helloRoute(666), { message: 'Async hello success' });

  const store = mockStore();

  return store.dispatch(sayHelloAsync(666))
    .then(() => {
      expect(store.getActions())
        .toEqual([
          sayHelloRequest(),
          sayHelloSuccess('Async hello success'),
        ]);
    });
});

test('sayHelloAsync 404', () => {
  fetchMock.get(helloRoute(666), 404);

  const store = mockStore();

  return store.dispatch(sayHelloAsync(666))
    .then(() => {
      expect(store.getActions())
        .toEqual([
          sayHelloRequest(),
          sayHelloFailure(new Error('Not Found')),
        ]);
    });
});

test('sayHelloAsync data error', () => {
  fetchMock.get(helloRoute(666), {});

  const store = mockStore();

  return store.dispatch(sayHelloAsync(666))
    .then(() => {
      expect(store.getActions())
        .toEqual([
          sayHelloRequest(),
          sayHelloFailure(new Error('No message received')),
        ]);
    });
});

