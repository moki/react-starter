/* eslint-disable import/prefer-default-export */
// @flow
import { APP_CONTAINER_CLASS, STATIC_PATH } from 'shared/config';
import { isProduction } from 'shared/util';

const developmentURL = '/dist/bundle.js';
const productionURL = `${STATIC_PATH}/bundle.js`;

export const render = (title: string) => `<!doctype html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <h1>${title}</h1>
    <div class="${APP_CONTAINER_CLASS}"></div>
    <script src="${isProduction ? productionURL : developmentURL}"></script>
    </body>
  </html>
`;
