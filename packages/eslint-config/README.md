# 🌹 @sharyn/eslint-config

[![npm](https://img.shields.io/npm/v/@sharyn/eslint-config.svg)](https://www.npmjs.com/package/@sharyn/eslint-config)

## 🌹 Install

Minimal:

```bash
yarn add --dev @sharyn/eslint-config eslint
```

Full-featured without React or Jest Puppeteer (non-web projects):

```bash
yarn add --dev @sharyn/eslint-config eslint babel-eslint eslint-config-airbnb-base eslint-plugin-import jest eslint-plugin-flowtype eslint-plugin-prettier eslint-config-prettier eslint-import-resolver-babel-module@v5.0.0-beta.0 @babel/plugin-proposal-do-expressions @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-optional-chaining @babel/plugin-proposal-pipeline-operator flow-bin prettier @babel/core babel-plugin-module-resolver
```

Full-featured with React and Jest Puppeteer (web projects):

```bash
yarn add react && yarn add --dev @sharyn/eslint-config eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y jest jest-puppeteer puppeteer eslint-plugin-flowtype eslint-plugin-prettier eslint-config-prettier eslint-import-resolver-babel-module@v5.0.0-beta.0 @babel/plugin-proposal-do-expressions @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-optional-chaining @babel/plugin-proposal-pipeline-operator flow-bin prettier @babel/core babel-plugin-module-resolver
```

> Triple-click to select the entire line

The following modules are automatically configured for ESLint if they are detected in your `package.json`:

- `eslint-config-airbnb`
- `eslint-config-airbnb-base`
- `eslint-plugin-import`
- `eslint-plugin-react`
- `eslint-plugin-jsx-a11y`
- `jest-puppeteer`
- `jest`
- `eslint-plugin-flowtype`
- `eslint-plugin-prettier`
- `eslint-config-prettier`
- `eslint-import-resolver-babel-module@v5.0.0-beta.0`
- `@babel/plugin-proposal-do-expressions`
- `@babel/plugin-proposal-nullish-coalescing-operator`
- `@babel/plugin-proposal-optional-chaining`
- `@babel/plugin-proposal-pipeline-operator`
- `babel-eslint`
- `flow-bin`
- `react`

See the [implementation](https://github.com/sharynjs/sharyn/blob/master/packages/eslint-config/index.js).

## 🌹 Usage

Add your `package.json`:

```json
"eslintConfig": {
  "extends": "@sharyn"
},
```

If you are not using `@sharyn/babel-preset`, remember that you also need to configure Babel to use `babel-plugin-module-resolver`, Flow, or the `@babel/plugin-proposal-` modules.
