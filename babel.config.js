module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-flow', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    '@babel/plugin-proposal-do-expressions',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    'babel-plugin-flow-react-proptypes',
  ],
}
