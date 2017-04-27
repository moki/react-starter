// @flow
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import Home from 'pages/Home';
import Hello from 'pages/Hello';
import HelloAsync from 'pages/HelloAsync';
import NotFound from 'pages/NotFound';

import Navigation from 'containers/Navigation';

import { PROJECT_NAME } from 'shared/config';
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  NOT_FOUND_PAGE_ROUTE,
} from 'shared/routes';

const App = () =>
  <div>
    <Helmet titleTemplate={`%s | ${PROJECT_NAME}`} defaultTitle={PROJECT_NAME} />
    <Navigation />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <Home />} />
      <Route exact path={HELLO_PAGE_ROUTE} render={() => <Hello />} />
      <Route exact path={HELLO_ASYNC_PAGE_ROUTE} render={() => <HelloAsync />} />
      <Route exact path={NOT_FOUND_PAGE_ROUTE} render={() => <NotFound />} />
      <Route component={NotFound} />
    </Switch>
  </div>;

export default App;
