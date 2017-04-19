/* eslint-disable import/prefer-default-export */
// @flow
export const render = (title: string) => `
  <!doctype html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <h1>${title}</h1>
    </body>
  </html>
`;
