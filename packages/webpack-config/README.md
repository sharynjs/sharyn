# @sharyn/webpack-config

![npm](https://img.shields.io/npm/v/@sharyn/babel-preset.svg)

## Install

```bash
npx install-peerdeps -d -Y @sharyn/webpack-config
```

Create a `webpack.config.js` at the root of your project containing:

```js
const sharynWebpackConfig = require('@sharyn/webpack-config')
const { WDS_PORT } = require('_server/env')

module.exports = sharynWebpackConfig(WDS_PORT)
```
