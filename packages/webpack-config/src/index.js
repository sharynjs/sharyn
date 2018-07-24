const path = require('path')

const WDS_PORT = 8371

module.exports = {
  entry: './src/_client/client.js',
  output: {
    filename: `js/bundle.js`,
    path: path.resolve('dist'),
    publicPath: `http://localhost:${WDS_PORT}/static`,
  },
  module: { rules: [{ test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader' } }] },
  devServer: { port: WDS_PORT, headers: { 'Access-Control-Allow-Origin': '*' } },
}
