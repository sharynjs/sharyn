# 🌹 Sharyn Setup Tutorial: Common Packages

First, let's install the packages that I consider useful for _any_ project by running the command:

```bash

```

> Triple-click to select it all

It will install the following packages:

## 🌹 Dependencies

- **`@sharyn/util`** – Lodash-like utils
- **`lodash`** – Utils

## 🌹 Dev Dependencies

**`@babel/core`** – Babel (transpiler) core - no CLI

**`@babel/plugin-proposal-do-expressions`** – To use `do { }` expressions

**`@babel/plugin-proposal-nullish-coalescing-operator`** – To use `undef ?? default`

**`@babel/plugin-proposal-optional-chaining`** – To use `maybe?.property`

**`@babel/plugin-proposal-pipeline-operator`** – To use `'hello' |> console.log`

**`@babel/preset-env`** – The recommended latest Babel preset

**`@babel/preset-flow`** – The recommended Babel preset for Flow

**`@sharyn/babel-preset`** – Configures all the Babel modules together

**`@sharyn/eslint-config`** – Configures all the ESLint modules together

**`@sharyn/prettier-config`** – Configures Prettier

**`babel-core@^7.0.0-0`** – The bridge from Babel 6 to 7, used by Jest

**`babel-eslint`** – Used to parse Flow and the new syntax Babel proposals

**`babel-jest`** – Needed by Jest to use Babel 7

**`babel-plugin-module-resolver`** – To import `from 'foo'` instead of `'../../foo'`

**`eslint`** – ESLint (linter) core and CLI

**`eslint-config-prettier`** – Disables ESLint rules conflicting with Prettier

**`eslint-import-resolver-babel-module@5.0.0-beta.0`** – For ESLint to use `babel-plugin-module-resolver`

**`eslint-plugin-flowtype`** – ESLint rules for Flow annotations

**`eslint-plugin-import`** – Add support for `import` syntax to ESLint and import rules

**`eslint-plugin-prettier`** – Show Prettier errors in ESLint

**`flow-bin`** – Flow (type checker) core and CLI

**`jest`** – Jest (test runner) core and CLI

**`prettier`** – Prettier (code formatter) core and CLI

## 🌹 Files

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

## 🌹 Next

Then you have 2 options.
