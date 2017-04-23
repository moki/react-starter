import { helloRoute } from './routes';

test('helloRoute', () => {
  expect(helloRoute())
    .toBe('/ajax/hello/:num');
  expect(helloRoute(123))
    .toBe('/ajax/hello/123');
});
