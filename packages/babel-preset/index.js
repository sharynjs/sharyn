module.exports = () => ({
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
  plugins: [['module-resolver', { root: ['./src'] }]],
  env: {
    development: {
      plugins: ['flow-react-proptypes', 'react-hot-loader/babel'],
    },
  },
})
