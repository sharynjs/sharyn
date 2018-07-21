# 🌹 @sharyn/eslint-config

[![npm](https://img.shields.io/npm/v/@sharyn/eslint-config.svg)](https://www.npmjs.com/package/@sharyn/eslint-config)

You can use this package as a standalone, but I recommend following the [**development setup tutorial**](https://github.com/sharynjs/sharyn/blob/master/docs/1-development-setup.md) to also install Babel, Flow, Jest, React, and their ESLint-related plugins.

## 🌹 Install

Minimal install:

```bash
yarn add --dev @sharyn/eslint-config eslint
```

Add to your `package.json`:

```json
"eslintConfig": {
  "extends": "@sharyn"
},
```

## 🌹 Auto-configured Modules

The following supported modules are automatically configured for ESLint if they are detected in your `package.json`:

- [**@babel/plugin-proposal-do-expressions**](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-do-expressions) – To use `do { }` expressions
- [**@babel/plugin-proposal-nullish-coalescing-operator**](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-nullish-coalescing-operator) – To use `isUndef ?? 'default'`
- [**@babel/plugin-proposal-optional-chaining**](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-optional-chaining) – To use `isUndef?.property`
- [**@babel/plugin-proposal-pipeline-operator**](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-pipeline-operator) – To use `'hello' |> console.log`
- [**babel-eslint**](https://github.com/babel/babel-eslint) – Used to parse Flow and the new Babel syntax proposals
- [**eslint-config-airbnb**](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) – ESLint configuration by Airbnb (with React rules)
- [**eslint-config-airbnb-base**](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) – ESLint configuration by Airbnb (without React rules)
- [**eslint-config-prettier**](https://github.com/prettier/eslint-config-prettier) – Disables ESLint rules conflicting with Prettier
- [**eslint-import-resolver-babel-module@5.0.0-beta.0**](https://github.com/tleunen/eslint-import-resolver-babel-module) – For ESLint to use `babel-plugin-module-resolver`
- [**eslint-plugin-import**](https://github.com/benmosher/eslint-plugin-import) – Add support for `import` syntax to ESLint, and import rules
- [**eslint-plugin-jsx-a11y**](https://github.com/evcohen/eslint-plugin-jsx-a11y) – ESLint rules for JSX and accessibility
- [**eslint-plugin-react**](https://github.com/yannickcr/eslint-plugin-react) – ESLint rules for React
- [**eslint-plugin-flowtype**](https://github.com/gajus/eslint-plugin-flowtype) – ESLint rules for Flow annotations
- [**eslint-plugin-prettier**](https://github.com/prettier/eslint-plugin-prettier) – Show Prettier errors in ESLint
- [**flow-bin**](https://flow.org/) – Flow (type checker) core library and CLI
- [**jest**](https://jestjs.io/) – Jest (test runner) core library and CLI
- [**jest-puppeteer**](https://github.com/smooth-code/jest-puppeteer) – Jest preset for Puppeteer
- [**react**](https://reactjs.org/) – React and JSX core

See the [implementation](https://github.com/sharynjs/sharyn/blob/master/packages/eslint-config/index.js).
