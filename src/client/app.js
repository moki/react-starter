/* eslint-disable react/prefer-stateless-function */
// @flow
import React from 'react';

import HelloButton from 'containers/HelloButton';
import HelloMessage from 'containers/HelloMessage';

const App = () => <div>
  React Application
  <HelloMessage />
  <HelloButton />
</div>;

export default App;
