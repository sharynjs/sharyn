const path = require('path')

module.exports = wdsPort => ({
  entry: './src/_client/client.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve('dist'),
    publicPath: `http://localhost:${wdsPort}/static`,
  },
  module: { rules: [{ test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader' } }] },
  devServer: { port: wdsPort, headers: { 'Access-Control-Allow-Origin': '*' } },
})
