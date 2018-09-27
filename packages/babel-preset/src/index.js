// @flow

// flow-disable-next-line
import { hasPackage } from '@sharyn/check-setup'
// flow-disable-next-line
import { NO_HMR } from '@sharyn/env'

const config = {
  presets: [],
  plugins: [],
  env: {
    development: {
      plugins: [],
    },
  },
}

hasPackage('@babel/preset-env') && config.presets.push('@babel/preset-env')
hasPackage('@babel/preset-react') && config.presets.push('@babel/preset-react')
hasPackage('@babel/preset-flow') && config.presets.push('@babel/preset-flow')

hasPackage('@babel/plugin-proposal-pipeline-operator') &&
  config.plugins.push(['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }])
hasPackage('@babel/plugin-proposal-do-expressions') &&
  config.plugins.push('@babel/plugin-proposal-do-expressions')
hasPackage('@babel/plugin-proposal-nullish-coalescing-operator') &&
  config.plugins.push('@babel/plugin-proposal-nullish-coalescing-operator')
hasPackage('@babel/plugin-proposal-optional-chaining') &&
  config.plugins.push('@babel/plugin-proposal-optional-chaining')
hasPackage('@babel/plugin-proposal-optional-catch-binding') &&
  config.plugins.push('@babel/plugin-proposal-optional-catch-binding')

hasPackage('@babel/plugin-syntax-dynamic-import') &&
  config.plugins.push('@babel/plugin-syntax-dynamic-import')

hasPackage('babel-plugin-module-resolver') &&
  config.plugins.push(['babel-plugin-module-resolver', { root: ['./src'] }])

hasPackage('babel-plugin-flow-react-proptypes') &&
  config.env.development.plugins.push('babel-plugin-flow-react-proptypes')

NO_HMR || config.env.development.plugins.push('react-hot-loader/babel')

module.exports = () => config
