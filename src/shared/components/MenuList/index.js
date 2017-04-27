// @flow
import React from 'react';
import MenuItem from 'components/MenuItem';

const MenuList = ({ menu }: any) =>
  <ul>
    {menu.map(item => (
      <MenuItem
        activeStyle={{ color: 'limegreen' }}
        label={item.label}
        route={item.route}
        key={item.route}
        exact
      />
    ))}
  </ul>
;

export default MenuList;
