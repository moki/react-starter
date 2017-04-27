// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ route, exact, label, activeStyle }: any) =>
  <li key={route}>
    <NavLink to={route} activeStyle={activeStyle} exact={exact}>{label}</NavLink>
  </li>
;

export default MenuItem;
