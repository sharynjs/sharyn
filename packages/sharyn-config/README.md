# @sharyn/config

## Install

```bash
yarn add @sharyn-config
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
