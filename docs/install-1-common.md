# 🌹 Sharyn Setup Tutorial: Common Packages

First, let's install the packages that I consider useful for _any_ project:

```json
  "dependencies": {
    "@sharyn/util": "^1.0.0",
    "lodash": "^4.17.10"
  },
  "devDependencies": {
    "@babel/core": "^7.0.0-beta.54",
    "@babel/plugin-proposal-do-expressions": "^7.0.0-beta.54",
    "@babel/plugin-proposal-nullish-coalescing-operator": "^7.0.0-beta.54",
    "@babel/plugin-proposal-optional-chaining": "^7.0.0-beta.54",
    "@babel/plugin-proposal-pipeline-operator": "^7.0.0-beta.54",
    "@babel/preset-env": "^7.0.0-beta.54",
    "@babel/preset-flow": "^7.0.0-beta.54",
    "@sharyn/babel-preset": "^2.0.4",
    "@sharyn/cli": "^2.13.0",
    "@sharyn/eslint-config": "^2.0.1",
    "babel-core": "7.0.0-bridge.0",
    "babel-eslint": "^8.2.6",
    "babel-jest": "^23.2.0",
    "babel-plugin-module-resolver": "^3.1.1",
    "eslint": "^5.2.0",
    "eslint-config-prettier": "^2.9.0",
    "eslint-import-resolver-babel-module": "5.0.0-beta.0",
    "eslint-plugin-flowtype": "^2.50.0",
    "eslint-plugin-import": "^2.13.0",
    "eslint-plugin-prettier": "^2.6.2",
    "flow-bin": "^0.77.0",
    "jest": "^23.4.1",
    "prettier": "^1.13.7"
  }
```

You can install them by running the following command (triple-click to select it all):

```bash

```

And create the following files:

- `.prettierrc.js` containing

```js
module.exports = require('@sharyn/prettier-config')
```

- `.flowconfig` containing:

```
[options]
suppress_comment= \\(.\\|\n\\)*\\flow-disable-next-line

module.system.node.resolve_dirname=node_modules
module.system.node.resolve_dirname=src
```


Then you have 2 options:
