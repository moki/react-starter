// @flow
import React from 'react';
import Helmet from 'react-helmet';

const title = 'Page Not Found';

const NotFoundPage = () =>
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'This is 404 Not Found Page' },
        { property: 'og:title', content: title },
      ]}
    />
    <h1>{title}</h1>
    Page Not Found
  </div>
;

export default NotFoundPage;
