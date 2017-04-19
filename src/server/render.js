// @flow
/* eslint-disable import/prefer-default-export */
import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from 'shared/config';
import { isProduction } from 'shared/util';

export const render = (title: string) => `
  <!doctype html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <h1>${title}</h1>
    <div class="${APP_CONTAINER_CLASS}"></div>
    <script src="${isProduction ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
    </body>
  </html>
`;
