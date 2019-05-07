// @flow

const config = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/react',
    'prettier/flowtype',
    'plugin:react/recommended',
  ],
  plugins: ['flowtype', 'prettier'],
  env: {
    jest: true,
    browser: true,
  },
  globals: {
    page: true,
    browser: true,
    jestPuppeteer: true,
  },
  rules: {
    'prettier/prettier': 2,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'import/prefer-default-export': 0,
    'no-unused-expressions': 0,
    'no-underscore-dangle': 0,
    'func-names': 0,
    'no-unexpected-multiline': 2,
    'prefer-destructuring': [
      2,
      {
        VariableDeclarator: { object: true, array: true },
        AssignmentExpression: { object: false, array: false },
      },
    ],
    semi: [2, 'never'],
  },
  settings: {
    'import/resolver': { 'babel-module': {} },
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
}

module.exports = config
