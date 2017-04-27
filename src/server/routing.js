// @flow
import {
  homePage,
  helloPage,
  helloAsyncPage,
  hello,
} from './controller';

import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  helloRoute,
} from 'shared/routes';

import render from './render';

export default (app: Object) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(render(req.url, homePage()));
  });

  app.get(HELLO_PAGE_ROUTE, (req, res) => {
    res.send(render(req.url, helloPage()));
  });

  app.get(HELLO_ASYNC_PAGE_ROUTE, (req, res) => {
    res.send(render(req.url, helloAsyncPage()));
  });

  app.get(helloRoute(), (req, res) => {
    res.json(hello(req.params.num));
  });

  app.get('/500', () => {
    throw Error('Fake Internal Server Error');
  });

  app.get('*', (req, res) => {
    res.status(404).send(render(req.url));
  });

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
};
