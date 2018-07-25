// @flow

import path from 'path'

import { WDS_PORT } from './wds-port'

const config: Object = {
  entry: './src/_client/client.js',
  output: {
    filename: `js/bundle.js`,
    path: path.resolve('dist'),
  },
  module: { rules: [{ test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader' } }] },
}

if (WDS_PORT) {
  config.output.publicPath = `http://localhost:${WDS_PORT}/static`
  config.devServer = {
    port: WDS_PORT,
    headers: { 'Access-Control-Allow-Origin': '*' },
  }
}

module.exports = config
