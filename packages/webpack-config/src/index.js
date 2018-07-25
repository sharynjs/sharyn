// @flow

import path from 'path'

import WDS_PORT from './wds-port'

module.exports = {
  entry: './src/_client/client.js',
  output: {
    filename: `js/bundle.js`,
    path: path.resolve('dist'),
    publicPath: `http://localhost:${WDS_PORT}/static`,
  },
  module: { rules: [{ test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader' } }] },
  devServer: {
    port: WDS_PORT,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
}
