const sharynConfig = require('./src/webpack-config')

module.exports = { ...sharynConfig, entry: './ui-dev/client.js' }
