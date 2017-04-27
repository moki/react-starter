// @flow
import React from 'react';
import Helmet from 'react-helmet';

import HelloButton from 'containers/HelloButton';
import Message from 'containers/HelloMessage';

const title = 'Hello Page';

const HelloPage = () =>
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'This is Hello Page' },
        { property: 'og:title', content: title },
      ]}
    />
    <h1>{title}</h1>
    <Message />
    <HelloButton />
  </div>
;

export default HelloPage;
