# 🌹 Sharyn Setup Tutorial: Common Packages

First, let's install the packages that I consider useful for _any_ project by running the command:

```bash

```

> Triple-click to select it all

It will install the following packages:

```bash
dependencies:
  @sharyn/util # Utils
  lodash # Utils

devDependencies
  @babel/core # Babel core (no CLI)
  @babel/plugin-proposal-do-expressions # To use do { } expressions
  @babel/plugin-proposal-nullish-coalescing-operator # To use undef ?? default
  @babel/plugin-proposal-optional-chaining # To use obj?.maybe
  @babel/plugin-proposal-pipeline-operator # To use 'hello' |> console.log
  @babel/preset-env # The recommended latest Babel preset
  @babel/preset-flow # The recommended preset for Flow
  @sharyn/babel-preset # The Sharyn Babel preset that glues everything together
  @sharyn/eslint-config # The Sharyn ESLint config that glues everything together
  babel-core@^7.0.0-0 # The bridge from Babel 6 to 7, used by Jest
  babel-eslint # Used to parse Flow and the new syntax Babel proposals
  babel-jest # Needed by Jest to use Babel 7
  babel-plugin-module-resolver # To import from 'foo' instead of '../../foo'
  eslint # ESLint core and CLI
  eslint-config-prettier # Disables ESLint rules conflicting with Prettier
  eslint-import-resolver-babel-module # Make ESLint resolve modules with babel-plugin-module-resolver
  eslint-plugin-flowtype # ESLint rules for your Flow annotations
  eslint-plugin-import # Add support for import syntax to ESLint
  eslint-plugin-prettier # Show Prettier errors in ESLint
  flow-bin # Flow core and CLI
  jest # Jest core and CLI
  prettier # Prettier core and CLI
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
