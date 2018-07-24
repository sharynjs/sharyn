# 🌹 Sharyn Tutorial – Development Setup

In this tutorial, for the purpose of learning, we are going to create a project that enables every feature offered by Sharyn.

You might not need all these features for your projects, but it is very easy to take away some modules. For instance if you don't want to use Flow or Jest, simply uninstall all the packages that are related to Flow or Jest. The Babel and ESLint configurations are dynamically updated based on the content of your `package.json`, so removing bricks should keep the project running smoothly (and otherwise, you'll see helpful errors letting you know that a specific package is missing).

We are going to compile our code with the new [**Babel 7**](https://medium.freecodecamp.org/were-nearing-the-7-0-babel-release-here-s-all-the-cool-stuff-we-ve-been-doing-8c1ade684039), lint it with [**ESLint 5**](https://eslint.org/docs/user-guide/migrating-to-5.0.0), type-check it with [**Flow**](https://flow.org/en/), test it with [**Jest**](https://jestjs.io/), and auto-format it with [**Prettier**](https://prettier.io/). Then we have access to a bunch of utils with [**Lodash**](https://lodash.com/) and [**@sharyn/util**](https://github.com/sharynjs/sharyn/tree/master/packages/util) to make out life easier.

Excited? Let's get started!

First, let's install the packages that I consider useful for any project by running the following command:

```bash
yarn add @sharyn/util lodash && yarn add --dev @babel/cli @babel/core @babel/node @babel/plugin-proposal-do-expressions @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-optional-chaining @babel/plugin-proposal-pipeline-operator @babel/preset-env @babel/preset-flow @sharyn/babel-preset @sharyn/eslint-config @sharyn/prettier-config babel-core@^7.0.0-0 babel-eslint babel-jest babel-plugin-module-resolver eslint eslint-config-prettier eslint-import-resolver-babel-module@5.0.0-beta.0 eslint-plugin-flowtype eslint-plugin-import eslint-plugin-prettier flow-bin jest prettier
```

> Triple-click to select it all (careful, it gets auto-executed when you paste it into your terminal)

Here we're setting up our development environment, because as you can see, these packages are mostly _development_ dependencies. Let's break these down.

## 🌹 Dependencies

- [**@sharyn/util**](https://github.com/sharynjs/sharyn/tree/master/packages/util) – Utils
- [**lodash**](https://lodash.com/) – Utils

## 🌹 Dev Dependencies

- [**@babel/cli**](https://github.com/babel/babel/tree/master/packages/babel-cli) – The `babel` binary to compile files for production
- [**@babel/core**](https://github.com/babel/babel/tree/master/packages/babel-core) – Babel (transpiler) core library
- [**@babel/node**](https://github.com/babel/babel/tree/master/packages/babel-node) – The `babel-node` binary to execute Babel code on the fly in development
- [**@babel/plugin-proposal-do-expressions**](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-do-expressions) – To use `do { }` expressions
- [**@babel/plugin-proposal-nullish-coalescing-operator**](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-nullish-coalescing-operator) – To use `isUndef ?? 'default'`
- [**@babel/plugin-proposal-optional-chaining**](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-optional-chaining) – To use `isUndef?.property`
- [**@babel/plugin-proposal-pipeline-operator**](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-pipeline-operator) – To use `'hello' |> console.log`
- [**@babel/preset-env**](https://github.com/babel/babel/tree/master/packages/babel-preset-env) – The latest Babel preset
- [**@babel/preset-flow**](https://github.com/babel/babel/tree/master/packages/babel-preset-flow) – The Babel preset for Flow
- [**@sharyn/babel-preset**](https://github.com/sharynjs/sharyn/tree/master/packages/babel-preset) – Configures all the detected Babel modules
- [**@sharyn/eslint-config**](https://github.com/sharynjs/sharyn/tree/master/packages/eslint-config) – Configures all the detected ESLint modules
- [**@sharyn/prettier-config**](https://github.com/sharynjs/sharyn/tree/master/packages/prettier-config) – Offers a Prettier configuration
- [**babel-core@^7.0.0-0**](https://github.com/babel/babel-bridge) – The bridge from Babel 6 to 7, used by Jest
- [**babel-eslint**](https://github.com/babel/babel-eslint) – Used to parse Flow and the new Babel syntax proposals
- [**babel-jest**](https://github.com/facebook/jest/tree/master/packages/babel-jest) – Needed by Jest to use Babel 7
- [**babel-plugin-module-resolver**](https://github.com/tleunen/babel-plugin-module-resolver) – To import `from 'foo'` instead of `'../../foo'`
- [**eslint**](https://eslint.org/) – ESLint (linter) core library and CLI
- [**eslint-config-prettier**](https://github.com/prettier/eslint-config-prettier) – Disables ESLint rules conflicting with Prettier
- [**eslint-import-resolver-babel-module@5.0.0-beta.0**](https://github.com/tleunen/eslint-import-resolver-babel-module) – For ESLint to use `babel-plugin-module-resolver`
- [**eslint-plugin-flowtype**](https://github.com/gajus/eslint-plugin-flowtype) – ESLint rules for Flow annotations
- [**eslint-plugin-import**](https://github.com/benmosher/eslint-plugin-import) – Add support for `import` syntax to ESLint, and import rules
- [**eslint-plugin-prettier**](https://github.com/prettier/eslint-plugin-prettier) – Show Prettier errors in ESLint
- [**flow-bin**](https://flow.org/) – Flow (type checker) core library and CLI
- [**jest**](https://jestjs.io/) – Jest (test runner) core library and CLI
- [**prettier**](https://prettier.io/) – Prettier (code formatter) core library and CLI

Yup, that's a lot of dependencies for not even writing a _Hello World_ yet. Breathe, I promise you'll be fine 🙂

## 🌹 Files

- Add this to your `package.json`:

```json
  "babel": {
    "presets": [
      "@sharyn"
    ]
  },
  "eslintConfig": {
    "extends": "@sharyn"
  },
```

And create the following files:

- `.prettierrc.js` containing:

```js
module.exports = require('@sharyn/prettier-config')
```

- `.flowconfig` containing:

```flowconfig
[options]
suppress_comment= \\(.\\|\n\\)*\\flow-disable-next-line

module.system.node.resolve_dirname=node_modules
module.system.node.resolve_dirname=src

esproposal.optional_chaining=enable
```

- `.gitignore` containing:

```gitignore
.DS_Store
/*.log
node_modules/
```

That's almost enough to get started.

<!-- markdownlint-disable no-trailing-punctuation -->

## 🌹 Just want a simple project?

Before we get into the full-stack setup part, you can branch-off here in case you just want to make a simple non-web JS project. Because all that stuff we just installed works wonders for any project.

If that's your case, and **only if that's your case**, install `eslint-config-airbnb-base`:

```bash
yarn add --dev eslint-config-airbnb-base
```

- [**eslint-config-airbnb-base**](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) – ESLint configuration by Airbnb (without React rules)

You're now all set for a simple project!

## 🌹 Next – Web Project

Let's now move on to the next part, setting up the [**web project**](https://github.com/sharynjs/sharyn/blob/master/docs/2-web-setup.md) environment.
