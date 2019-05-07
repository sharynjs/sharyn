const baseConfig = require('./src/eslint-config')

module.exports = {
  ...baseConfig,
  rules: {
    ...baseConfig.rules,
    'import/named': 0,
  },
}
