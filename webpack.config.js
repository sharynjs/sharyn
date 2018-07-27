const sharynConfig = require('./packages/webpack-config')

module.exports = { ...sharynConfig, entry: './ui-dev/client.js' }
