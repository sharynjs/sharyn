module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/react',
    'prettier/flowtype',
  ],
  plugins: ['flowtype', 'prettier'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'no-unused-expressions': 0,
    'no-underscore-dangle': 0,
    'func-names': 0,
    'no-unexpected-multiline': 2,
    semi: [2, 'never'],
    'prettier/prettier': 2,
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
  },
}
