// @flow
import React from 'react';
import MenuList from 'components/MenuList';

import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  NOT_FOUND_PAGE_ROUTE,
} from 'shared/routes';

const menu = [
  {
    route: HOME_PAGE_ROUTE,
    label: 'Home',
  },
  {
    route: HELLO_PAGE_ROUTE,
    label: 'Hello',
  },
  {
    route: HELLO_ASYNC_PAGE_ROUTE,
    label: 'Hello Async',
  },
  {
    route: NOT_FOUND_PAGE_ROUTE,
    label: '404 Page Not Found',
  },
];

const Navigation = () =>
  <nav>
    <MenuList menu={menu} />
  </nav>
;

export default Navigation;
