// @flow
// eslint-disable-next-line import/prefer-default-export
export const helloRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`;
