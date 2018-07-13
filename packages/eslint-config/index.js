module.exports = {
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
    'no-unexpected-multiline': 2,
    'import/prefer-default-export': 0,
    'prettier/prettier': 2,
    'func-names': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}
