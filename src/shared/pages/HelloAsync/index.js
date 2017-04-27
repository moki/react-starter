// @flow
import React from 'react';
import Helmet from 'react-helmet';

import AsyncButton from 'containers/AsyncButton';
import AsyncMessage from 'containers/AsyncMessage';

const title = 'Async Hello Page';

const HelloAsyncPage = () =>
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'This is asynchronous hello page' },
        { property: 'og:title', content: title },
      ]}
    />
    <h1>{title}</h1>
    <AsyncMessage />
    <AsyncButton />
  </div>
;

export default HelloAsyncPage;
