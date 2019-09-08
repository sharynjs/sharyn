<div align="center">
  <img src="https://user-images.githubusercontent.com/40995577/42487947-ea40d256-840b-11e8-8acc-50e62a3226b7.png" alt="Sharyn logo">
</div>

# 🌹 Sharyn

Sharyn is a collection of JavaScript / TypeScript packages that make your life easier and reduce your boilerplate code.

#### 💯 General

- [**@sharyn/util**](https://github.com/sharynjs/sharyn/blob/master/packages/util/README.md#readme) – Lodash-like utils:
  - [**between**](https://github.com/sharynjs/sharyn/blob/master/packages/util.between/README.md#readme) – Tests if a value is between two bounds.
  - [**cycle**](https://github.com/sharynjs/sharyn/blob/master/packages/util.cycle/README.md#readme) – Cycles between multiple values.
  - [**either**](https://github.com/sharynjs/sharyn/blob/master/packages/util.either/README.md#readme) – Tests equality with multiple values.
  - [**exists**](https://github.com/sharynjs/sharyn/blob/master/packages/util.exists/README.md#readme) – Returns `true` if not `null` or `undefined`.
  - [**global**](https://github.com/sharynjs/sharyn/blob/master/packages/util.global/README.md#readme) – Functions to create and access global variables.
  - [**html**](https://github.com/sharynjs/sharyn/blob/master/packages/util.html/README.md#readme) – A template string tag for HTML syntax highlighting.
  - [**ifs**](https://github.com/sharynjs/sharyn/blob/master/packages/util.ifs/README.md#readme) – `if`, `else if`, `else if`... `else` util.
  - [**inlineThrow**](https://github.com/sharynjs/sharyn/blob/master/packages/util.inlineThrow/README.md#readme) – To `throw` in an expression.
  - [**invoke**](https://github.com/sharynjs/sharyn/blob/master/packages/util.invoke/README.md#readme) – A self invoking function util.
  - [**swit**](https://github.com/sharynjs/sharyn/blob/master/packages/util.swit/README.md#readme) – An inline and less verbose `switch`.
  - [**toggle**](https://github.com/sharynjs/sharyn/blob/master/packages/util.toggle/README.md#readme) – Toggles between two values.
  - [**tryCatch**](https://github.com/sharynjs/sharyn/blob/master/packages/util.trycatch/README.md#readme) – An inline `try` - `catch` - `finally`.
  - [**wait**](https://github.com/sharynjs/sharyn/blob/master/packages/util.wait/README.md#readme) – A `Promise`-based delay.
- [**@sharyn/scripts**](https://github.com/sharynjs/sharyn/blob/master/packages/scripts/README.md#readme) – Helpers to write "NPM scripts" in a JavaScript file

#### 💻 Development

- [**@sharyn/prettier**](https://github.com/sharynjs/sharyn/blob/master/packages/prettier/README.md#readme) – A Prettier configuration
- [**babel-preset-sharyn**](https://github.com/sharynjs/babel-preset-sharyn) – A Babel preset for React and Flow
- [**eslint-config-sharyn**](https://github.com/sharynjs/eslint-config-sharyn) – An ESLint configuration for Babel, React and Flow

#### ⚛️ React

- [**@sharyn/react-hooks**](https://github.com/sharynjs/sharyn/blob/master/packages/react-hooks/README.md#readme) – Convenient React Hooks
- [**@sharyn/react-router**](https://github.com/sharynjs/sharyn/blob/master/packages/react-router/README.md#readme) – Components for React Router

#### 🌐 Web

- [**@sharyn/browser**](https://github.com/sharynjs/sharyn/blob/master/packages/browser/README.md#readme) – Helpers for code that runs in the browser

## Getting Started

Depending on your needs, you can install individual modules, like [`@sharyn/browser.getformfields`](https://www.npmjs.com/package/@sharyn/browser.getformfields), a group of modules, like [`@sharyn/browser`](https://www.npmjs.com/package/@sharyn/browser), or the whole library (which is actually quite small, 379KB on disk, including all its dependencies). That's the simplest way to get started. The library is separated into 2 parts, `sharyn`, which goes in your `dependencies`, and `sharyn-dev`, which goes in your `devDependencies`.

```sh
npm i sharyn && npm i --save-dev sharyn-dev
# or
yarn add sharyn && yarn add --dev sharyn-dev
```

## Imports

And depending on what packages you chose to install, you have different ways to `import` or `require` a module:

```js
// If you installed an individual package (note the lowercase name)
import getFormFields from '@sharyn/browser.getformfields'

// If you installed a group of modules
import getFormFields from '@sharyn/browser/getFormFields'
import { getFormFields } from '@sharyn/browser'

// If you installed the whole library
import getFormFields from 'sharyn/browser/getFormFields'
import { getFormFields } from 'sharyn/browser'
import { getFormFields } from 'sharyn'
```

**Note**: If you use the `from 'sharyn'` syntax, you need to have `react` and `react-router` installed in your project, since some of the modules included in `sharyn` require them.

Also, TypeScript users, remember to have your `esModuleInterop` set to `true` if you want to import the default exports without having to use the `*` syntax.

### Credits

By **Jonathan Verrecchia** (**verekia**) [**Github**](https://github.com/verekia) • [**Twitter**](https://twitter.com/verekia) • [**Website**](https://verekia.com) – MIT License

_Sharyn_ is a reference to one of my favorite metalcore songs, [**Rose of Sharyn**](https://www.youtube.com/watch?v=PgMsACFMIq8) by Killswitch Engage.

Rose illustration by tiaesther_4360
