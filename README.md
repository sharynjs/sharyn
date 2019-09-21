<div align="center">
  <img src="https://user-images.githubusercontent.com/40995577/42487947-ea40d256-840b-11e8-8acc-50e62a3226b7.png" alt="Sharyn logo">
</div>

# 🌹 Sharyn

Sharyn is a collection of JavaScript / TypeScript packages that make your life easier and reduce your boilerplate code.

#### 💯 General

- [**@sharyn/util**](https://github.com/sharynjs/sharyn/blob/master/packages/util/README.md#readme) – Lodash-like utils:
  - [**between**](https://github.com/sharynjs/sharyn/blob/master/packages/util.between/README.md#readme) – Tests if a value is between two bounds
  - [**cycle**](https://github.com/sharynjs/sharyn/blob/master/packages/util.cycle/README.md#readme) – Cycles between multiple values
  - [**either**](https://github.com/sharynjs/sharyn/blob/master/packages/util.either/README.md#readme) – Tests equality with multiple values
  - [**exists**](https://github.com/sharynjs/sharyn/blob/master/packages/util.exists/README.md#readme) – Returns `true` if not `null` or `undefined`
  - [**global**](https://github.com/sharynjs/sharyn/blob/master/packages/util.global/README.md#readme) – Functions to create and access global variables
  - [**ifs**](https://github.com/sharynjs/sharyn/blob/master/packages/util.ifs/README.md#readme) – An `if`, `else if`, `else if`... `else` util
  - [**inlineThrow**](https://github.com/sharynjs/sharyn/blob/master/packages/util.inlineThrow/README.md#readme) – To `throw` in an expression
  - [**invoke**](https://github.com/sharynjs/sharyn/blob/master/packages/util.invoke/README.md#readme) – A self invoking function util
  - [**swit**](https://github.com/sharynjs/sharyn/blob/master/packages/util.swit/README.md#readme) – An inline and less verbose `switch`
  - [**toggle**](https://github.com/sharynjs/sharyn/blob/master/packages/util.toggle/README.md#readme) – Toggles between two values
  - [**tryCatch**](https://github.com/sharynjs/sharyn/blob/master/packages/util.trycatch/README.md#readme) – An inline `try` - `catch` - `finally`
  - [**wait**](https://github.com/sharynjs/sharyn/blob/master/packages/util.wait/README.md#readme) – A `Promise`-based delay

- [**@sharyn/scripts**](https://github.com/sharynjs/sharyn/blob/master/packages/scripts/README.md#readme) – Helpers to write "NPM scripts" in a JavaScript file

- [**@sharyn/tags**](https://github.com/sharynjs/sharyn/blob/master/packages/tags/README.md#readme) – No-op ES6 template string tags to enable syntax highlighting in editors:
  - [**css**](https://github.com/sharynjs/sharyn/blob/master/packages/tags.css/README.md#readme) – For CSS
  - [**html**](https://github.com/sharynjs/sharyn/blob/master/packages/tags.html/README.md#readme) – For HTML

- [**@sharyn/nanoid**](https://github.com/sharynjs/sharyn/blob/master/packages/nanoid/README.md#readme) – A Nano ID default configuration

- [**@sharyn/actions**](https://github.com/sharynjs/sharyn/blob/master/packages/actions/README.md#readme) – Flux Standard Actions creator functions

#### ⚛️ React

- [**@sharyn/react-hooks**](https://github.com/sharynjs/sharyn/blob/master/packages/react-hooks/README.md#readme) – React Hooks:
  - [**useStateObject**](https://github.com/sharynjs/sharyn/blob/master/packages/react-router.usestateobject/README.md#readme) – A hook to manage a state that is an object

- [**@sharyn/react-router**](https://github.com/sharynjs/sharyn/blob/master/packages/react-router/README.md#readme) – Components for React Router:
  - [**PrivateRoute**](https://github.com/sharynjs/sharyn/blob/master/packages/react-router.privateroute/README.md#readme) – A `Route` that redirects unauthenticated users
  - [**ServerOnlyRoute**](https://github.com/sharynjs/sharyn/blob/master/packages/react-router.serveronlyroute/README.md#readme) – A `Route` that refreshes the page on the client

#### 🌐 Web

- [**@sharyn/browser**](https://github.com/sharynjs/sharyn/blob/master/packages/browser/README.md#readme) – Helpers for code that runs in the browser:

  - [**clearCaches**](https://github.com/sharynjs/sharyn/blob/master/packages/browser.clearcaches/README.md#readme) – Clears all the service worker caches
  - [**getFormData**](https://github.com/sharynjs/sharyn/blob/master/packages/browser.getformdata/README.md#readme) – Gives you the form data as a plain object

#### 💻 Development

- [**@sharyn/prettier**](https://github.com/sharynjs/sharyn/blob/master/packages/prettier/README.md#readme) – A Prettier configuration
- [**@sharyn/tsconfig**](https://github.com/sharynjs/sharyn/blob/master/packages/tsconfig/README.md#readme) – TypeScript configurations
- [**babel-preset-sharyn**](https://github.com/sharynjs/babel-preset-sharyn/blob/master/README.md#readme) – A Babel preset for React and Flow (not included in [**sharyn-dev**](https://github.com/sharynjs/sharyn/blob/master/packages/_sharyn-dev/README.md#readme))
- [**eslint-config-sharyn**](https://github.com/sharynjs/eslint-config-sharyn) – An ESLint configuration for Babel, React and Flow (not included in [**sharyn-dev**](https://github.com/sharynjs/sharyn/blob/master/packages/_sharyn-dev/README.md#readme))

## Getting Started

Depending on your needs, you can install individual modules, like [**@sharyn/util.swit**](https://github.com/sharynjs/sharyn/blob/master/packages/util.swit/README.md#readme), a group of modules, like [**@sharyn/util**](https://github.com/sharynjs/sharyn/blob/master/packages/util/README.md#readme), or the whole library. If you want to install everything, run:

```sh
npm i sharyn && npm i --save-dev sharyn-dev
# or
yarn add sharyn && yarn add --dev sharyn-dev
```

This will install [**sharyn**](https://github.com/sharynjs/sharyn/blob/master/packages/_sharyn/README.md#readme) in your `dependencies` and [**sharyn-dev**](https://github.com/sharynjs/sharyn/blob/master/packages/_sharyn-dev/README.md#readme) in your `devDependencies`.

If you use `sharyn/react-hooks` or `sharyn/react-router` which are included, you will need to install `react` and `react-router` too. They are not listed as `peerDependencies` to avoid noise in projects that want to use `sharyn` without React.

## Imports

And depending on what packages you chose to install, you have different ways to `import` or `require` a module:

```js
// If you installed an individual package (all lowercase)
import swit from '@sharyn/util.swit'

// If you installed a group of modules like '@sharyn/util'
import swit from '@sharyn/util/swit'
import { swit } from '@sharyn/util'

// If you installed the whole 'sharyn' library
import swit from 'sharyn/util/swit'
import { swit } from 'sharyn/util'
```

**Note**: TypeScript users, you need your `esModuleInterop` set to `true` if you want to import the default exports without having to use the `*` syntax.

### Credits

By **Jonathan Verrecchia** (**verekia**) [**Github**](https://github.com/verekia) • [**Twitter**](https://twitter.com/verekia) • [**Website**](https://verekia.com) – MIT License

_Sharyn_ is a reference to one of my favorite metalcore songs, [**Rose of Sharyn**](https://www.youtube.com/watch?v=PgMsACFMIq8) by Killswitch Engage.

Rose illustration by tiaesther_4360
