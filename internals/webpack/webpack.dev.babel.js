/* eslint-disable import/no-extraneous-dependencies */
// @flow
import webpack from 'webpack';

const config = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    './src/client',
  ],
  output: {
    filename: 'bundle.js',
    path: '/',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

export default config;
