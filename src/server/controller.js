// @flow
/* eslint-disable import/prefer-default-export */
export const homePage = () => null;

export const helloPage = () => ({
  hello: { message: 'Server-side preloaded message' },
});

export const helloAsyncPage = () => ({
  helloAsync: { messageAsync: 'Server-side preloaded message for async page' },
});

export const hello = (num: number) => ({
  message: `Hello from the server! (received ${num})`,
});
