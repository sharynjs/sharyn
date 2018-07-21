# 🌹 Sharyn Setup Tutorial: Common Packages

In this tutorial, for the purpose of learning, we are going to create a project that enables every feature offered by Sharyn.

You might not need all these features for your projects, but it is very easy to take away some modules. For instance if you don't want to use Flow or Jest, simply uninstall all the packages that are related to Flow or Jest. The Babel and ESLint configurations are dynamically updated based on the content of your `package.json`, so removing bricks should keep the project running smoothly (and otherwise, you'll see helpful errors letting you know that a specific package is missing).

Alright, let's get started!

First, let's install the packages that I consider useful for any project by running the following command:

```bash
yarn add @sharyn/util lodash && yarn add --dev @babel/cli @babel/core @babel/node @babel/plugin-proposal-do-expressions @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-optional-chaining @babel/plugin-proposal-pipeline-operator @babel/preset-env @babel/preset-flow @sharyn/babel-preset @sharyn/eslint-config @sharyn/prettier-config babel-core@^7.0.0-0 babel-eslint babel-jest babel-plugin-module-resolver eslint eslint-config-prettier eslint-import-resolver-babel-module@5.0.0-beta.0 eslint-plugin-flowtype eslint-plugin-import eslint-plugin-prettier flow-bin jest prettier
```

> Triple-click to select it all

Let's break down what all those packages are.

## 🌹 Dependencies

[**@sharyn/util**](https://github.com/sharynjs/sharyn/tree/master/packages/util) – Utils

[**lodash**](https://lodash.com/) – Utils

## 🌹 Dev Dependencies

[**@babel/cli**](https://github.com/babel/babel/tree/master/packages/babel-cli) – The `babel` binary to compile files for production

[**@babel/core**](https://github.com/babel/babel/tree/master/packages/babel-core) – Babel (transpiler) core library

[**@babel/node**](https://github.com/babel/babel/tree/master/packages/babel-node) – The `babel-node` binary to execute Babel code on the fly in development

[**@babel/plugin-proposal-do-expressions**](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-do-expressions) – To use `do { }` expressions

[**@babel/plugin-proposal-nullish-coalescing-operator**](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-nullish-coalescing-operator) – To use `isUndef ?? 'default'`

**`@babel/plugin-proposal-optional-chaining`** – To use `isUndef?.property`

**`@babel/plugin-proposal-pipeline-operator`** – To use `'hello' |> console.log`

**`@babel/preset-env`** – The latest Babel preset

**`@babel/preset-flow`** – The Babel preset for Flow

**`@sharyn/babel-preset`** – Configures all the detected Babel modules

**`@sharyn/eslint-config`** – Configures all the detected ESLint modules

**`@sharyn/prettier-config`** – Offers a Prettier configuration

**`babel-core@^7.0.0-0`** – The bridge from Babel 6 to 7, used by Jest

**`babel-eslint`** – Used to parse Flow and the new Babel syntax proposals

**`babel-jest`** – Needed by Jest to use Babel 7

**`babel-plugin-module-resolver`** – To import `from 'foo'` instead of `'../../foo'`

**`eslint`** – ESLint (linter) core library and CLI

**`eslint-config-prettier`** – Disables ESLint rules conflicting with Prettier

**`eslint-import-resolver-babel-module@5.0.0-beta.0`** – For ESLint to use `babel-plugin-module-resolver`

**`eslint-plugin-flowtype`** – ESLint rules for Flow annotations

**`eslint-plugin-import`** – Add support for `import` syntax to ESLint, and import rules

**`eslint-plugin-prettier`** – Show Prettier errors in ESLint

**`flow-bin`** – Flow (type checker) core library and CLI

**`jest`** – Jest (test runner) core library and CLI

**`prettier`** – Prettier (code formatter) core library and CLI

## 🌹 Files

Now let's create the following files:

`.prettierrc.js` containing:

```js
module.exports = require('@sharyn/prettier-config')
```

`.flowconfig` containing:

```
[options]
suppress_comment= \\(.\\|\n\\)*\\flow-disable-next-line

module.system.node.resolve_dirname=node_modules
module.system.node.resolve_dirname=src
```

`.gitignore` containing:

```
.DS_Store
/*.log
node_modules/
```

That's almost enough to get started.

## 🌹 Just want a simple project?

Before we get into the full-stack setup part, you can branch-off here in case you just want to make a simple non-web JS project. Because all that stuff we just installed works wonders for any JS project.

If that's your case, and **only if that's your case**, install `eslint-config-airbnb-base`:

```bash
yarn add --dev eslint-config-airbnb-base
```

**`eslint-config-airbnb-base`** – ESLint configuration by Airbnb (without React rules)

You're now all set for a simple project.

## 🌹 Next: Full-Stack Project

Let's now move on to the next part, setting up the [full-stack project](https://github.com/sharynjs/sharyn/blob/master/docs/2-setup-full-stack.md) environment.
