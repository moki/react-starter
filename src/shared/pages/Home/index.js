// @flow
import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';

import { PROJECT_NAME } from 'shared/config';

const styles = {
  hover: {
    '&:hover': {
      color: 'red',
    },
  },
  '@media (max-width: 800px)': {
    resize: {
      color: 'red',
    },
  },
  button: {
    'background-color': 'skyblue',
  },
};

const HomePage = ({ classes }: { classes: Object }) =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Home page of an app' },
        { property: 'og:title', content: PROJECT_NAME },
      ]}
    />
    <h1>{PROJECT_NAME}</h1>
    Home Page
    <div>
      <h3>JSS</h3>
      <p className={classes.hover}>hover me</p>
      <p className={classes.resize}>resize the window</p>
      <button className={classes.button}>Lit</button>
    </div>
  </div>;

export default injectSheet(styles)(HomePage);
