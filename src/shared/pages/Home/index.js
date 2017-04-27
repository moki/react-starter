// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { PROJECT_NAME } from 'shared/config';

const HomePage = () =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Home page of an app' },
        { property: 'og:title', content: PROJECT_NAME },
      ]}
    />
    <h1>{PROJECT_NAME}</h1>
    Home Page
  </div>;

export default HomePage;
