# @sharyn/config

![npm](https://img.shields.io/npm/v/@sharyn/config.svg)

This package provides configuration files for Babel, ESLint, and Prettier.

## Install

```bash
npx install-peerdeps -d -o -Y @sharyn/config-peerdeps && yarn add --dev @sharyn/config
```

## Usage

Create a `babel.config.js` file at the root of your project containing:

```js
// eslint-disable-next-line
module.exports = require('@sharyn/config/babel.config.js')
```

Create a `.eslintrc.js` file at the root of your project containing:

```js
module.exports = require('@sharyn/config/.eslintrc')
```

Create a `.prettierrc.js` file at the root of your project containing:

```js
module.exports = require('@sharyn/config/.prettierrc')
```
