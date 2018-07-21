# 🌹 @sharyn/babel-preset

[![npm](https://img.shields.io/npm/v/@sharyn/babel-preset.svg)](https://www.npmjs.com/package/@sharyn/babel-preset)

You can use this package as a standalone, but I recommend following the [**development setup tutorial**](https://github.com/sharynjs/sharyn/blob/master/docs/1-setup-development.md) to also install ESLint, Flow, Jest, React, and their Babel-related plugins.

## 🌹 Install

Minimal install:

```bash
yarn add --dev @sharyn/babel-preset @babel/core
```

Add to your `package.json`:

```json
"babel": {
  "presets": [
    "@sharyn"
  ]
},
```

## 🌹 Auto-configured Modules

The following supported modules are automatically configured for Babel if they are detected in your `package.json`:

- [**@babel/plugin-proposal-do-expressions**](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-do-expressions) – To use `do { }` expressions
- [**@babel/plugin-proposal-nullish-coalescing-operator**](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-nullish-coalescing-operator) – To use `isUndef ?? 'default'`
- [**@babel/plugin-proposal-optional-chaining**](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-optional-chaining) – To use `isUndef?.property`
- [**@babel/plugin-proposal-pipeline-operator**](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-pipeline-operator) – To use `'hello' |> console.log`
- [**@babel/preset-env**](https://github.com/babel/babel/tree/master/packages/babel-preset-env) – The latest Babel preset
- [**@babel/preset-flow**](https://github.com/babel/babel/tree/master/packages/babel-preset-flow) – The Babel preset for Flow
- [**@babel/preset-react**](https://github.com/babel/babel/tree/master/packages/babel-preset-react) – The Babel preset for React
- [**babel-plugin-flow-react-proptypes**](https://github.com/brigand/babel-plugin-flow-react-proptypes) – Generate PropTypes from Flow annotations
- [**babel-plugin-module-resolver**](https://github.com/tleunen/babel-plugin-module-resolver) – To import `from 'foo'` instead of `'../../foo'`

See the [implementation](https://github.com/sharynjs/sharyn/blob/master/packages/babel-preset/index.js).
