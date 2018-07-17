module.exports = () => ({
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
  plugins: [
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    '@babel/plugin-proposal-do-expressions',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    ['module-resolver', { root: ['./src'] }],
  ],
  env: {
    development: {
      plugins: ['flow-react-proptypes', 'react-hot-loader/babel'],
    },
  },
})
