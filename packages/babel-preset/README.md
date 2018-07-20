# 🌹 @sharyn/babel-preset

[![npm](https://img.shields.io/npm/v/@sharyn/babel-preset.svg)](https://www.npmjs.com/package/@sharyn/babel-preset)

## 🌹 Install

Minimal:

```bash
yarn add --dev @sharyn/babel-preset @babel/core
```

Full-featured:

```bash
yarn add react && yarn add --dev @sharyn/babel-preset @babel/core @babel/plugin-proposal-do-expressions @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-optional-chaining @babel/plugin-proposal-pipeline-operator @babel/preset-env @babel/preset-flow @babel/preset-react @sharyn/babel-preset babel-plugin-flow-react-proptypes babel-plugin-module-resolver
```

The following modules are automatically enabled in the Babel preset if they are detected in your `package.json`:

- `@babel/plugin-proposal-do-expressions`
- `@babel/plugin-proposal-nullish-coalescing-operator`
- `@babel/plugin-proposal-optional-chaining`
- `@babel/plugin-proposal-pipeline-operator`
- `@babel/preset-env`
- `@babel/preset-flow`
- `@babel/preset-react`
- `babel-plugin-flow-react-proptypes`
- `babel-plugin-module-resolver`

See the [implementation](https://github.com/sharynjs/sharyn/blob/master/packages/babel-preset/index.js).

## 🌹 Usage

Add to your `package.json`:

```json
"babel": {
  "presets": [
    "@sharyn"
  ]
},
```
