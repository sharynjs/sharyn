const { hasPackage } = require('@sharyn/check-setup')

const config = {
  presets: [],
  plugins: [],
  env: {
    development: {
      plugins: [],
    },
  },
}

if (hasPackage('@babel/preset-env')) {
  config.presets.push('@babel/preset-env')
}

if (hasPackage('@babel/preset-react')) {
  config.presets.push('@babel/preset-react')
}

if (hasPackage('@babel/preset-flow')) {
  config.presets.push('@babel/preset-flow')
}

if (hasPackage('@babel/plugin-proposal-pipeline-operator')) {
  config.plugins.push(['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }])
}

if (hasPackage('@babel/plugin-proposal-do-expressions')) {
  config.plugins.push('@babel/plugin-proposal-do-expressions')
}

if (hasPackage('@babel/plugin-proposal-nullish-coalescing-operator')) {
  config.plugins.push('@babel/plugin-proposal-nullish-coalescing-operator')
}

if (hasPackage('@babel/plugin-proposal-optional-chaining')) {
  config.plugins.push('@babel/plugin-proposal-optional-chaining')
}

if (hasPackage('babel-plugin-module-resolver')) {
  config.plugins.push(['module-resolver', { root: ['./src'] }])
}

if (hasPackage('babel-plugin-flow-react-proptypes')) {
  config.env.development.plugins.push('flow-react-proptypes')
}

if (hasPackage('react-hot-loader')) {
  config.env.development.plugins.push('react-hot-loader/babel')
}

module.exports = () => config
