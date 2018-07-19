const path = require('path')
const { WDS_PORT, NODE_ENV } = require('@sharyn/env')

if (NODE_ENV !== 'production' && NODE_ENV !== 'test' && !WDS_PORT) {
  throw Error('You must define a WDS_PORT environment variable in your .env file')
}

module.exports = {
  entry: './src/_client/client.js',
  output: {
    filename: `js/bundle${NODE_ENV === 'test' ? '-testing' : ''}.js`,
    path: path.resolve('dist'),
    publicPath: `http://localhost:${WDS_PORT}/static`,
  },
  module: { rules: [{ test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader' } }] },
  devServer: { port: WDS_PORT, headers: { 'Access-Control-Allow-Origin': '*' } },
}
