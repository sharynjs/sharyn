# 🌹 @sharyn/check-setup

[![npm](https://img.shields.io/npm/v/@sharyn/check-setup.svg)](https://www.npmjs.com/package/@sharyn/check-setup)

It is used internally by Sharyn to determine which features to load.

## 🌹 Install

```bash
yarn add @sharyn/check-setup
```

## 🌹 Usage

```js
import { hasPackage, hasFile } from '@sharyn/check-setup'

hasPackage('koa') // true or false based on your package.json
hasPackage('koa', true) // true or Error

hasFile('webpack.config.js') // true or false from the root of your project
hasFile('webpack.config.js', true) // true or Error
```
