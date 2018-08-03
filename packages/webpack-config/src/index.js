// @flow

/* eslint-disable import/no-extraneous-dependencies, global-require */

import path from 'path'
// flow-disable-next-line
import { hasPackage } from '@sharyn/check-setup'

import { WDS_PORT } from './wds-util'

const config: Object = {
  entry: './src/_client/client.js',
  output: {
    filename: `js/bundle.js`,
    path: path.resolve('dist'),
  },
  module: { rules: [{ test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader' } }] },
  plugins: [],
}

if (hasPackage('compression-webpack-plugin')) {
  // flow-disable-next-line
  const CompressionPlugin = require('compression-webpack-plugin')
  config.plugins.push(new CompressionPlugin())
}

if (WDS_PORT) {
  config.output.publicPath = `http://localhost:${WDS_PORT}/static`
  config.devServer = {
    port: WDS_PORT,
    headers: { 'Access-Control-Allow-Origin': '*' },
  }
}

module.exports = config
