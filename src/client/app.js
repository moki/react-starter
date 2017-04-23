/* eslint-disable react/prefer-stateless-function */
// @flow
import React from 'react';

import HelloButton from 'containers/HelloButton';
import HelloMessage from 'containers/HelloMessage';
import AsyncButton from 'containers/AsyncButton';
import AsyncMessage from 'containers/AsyncMessage';

const App = () =>
  <div>
    React Application
    <HelloMessage />
    <HelloButton />
    <AsyncMessage />
    <AsyncButton />
  </div>;

export default App;
