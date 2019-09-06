<div align="center">
  <img src="https://user-images.githubusercontent.com/40995577/42487947-ea40d256-840b-11e8-8acc-50e62a3226b7.png" alt="Sharyn logo">
</div>

# 🌹 Sharyn

Sharyn is a collection of JavaScript / TypeScript packages that make your life easier and reduce your boilerplate code.

#### 💯 General

- [**@sharyn/util**](https://github.com/sharynjs/sharyn-util) – Lodash-like utils
- [**@sharyn/scripts**](https://github.com/sharynjs/sharyn-scripts) – Helpers to write "NPM scripts" in a JavaScript file
- [**@sharyn/env**](https://github.com/sharynjs/sharyn-env) – Convenient access and validation of env variables

#### 💻 Development

- [**@sharyn/prettier**](https://github.com/sharynjs/sharyn-prettier) – A Prettier configuration
- [**babel-preset-sharyn**](https://github.com/sharynjs/babel-preset-sharyn) – A Babel preset for React and Flow
- [**eslint-config-sharyn**](https://github.com/sharynjs/eslint-config-sharyn) – An ESLint configuration for Babel, React and Flow

#### ⚛️ React

- [**@sharyn/hooks**](https://github.com/sharynjs/sharyn-hooks) – Convenient React Hooks


#### 🌐 Web

- [**@sharyn/browser**](https://github.com/sharynjs/sharyn/tree/master/browser) – Helpers for code that runs in the browser

## Getting Started

Depending on your needs, you can install individual modules, like [`@sharyn/browser.getformfields`](https://www.npmjs.com/package/@sharyn/browser.getformfields), a group of modules, like [`@sharyn/browser`](https://www.npmjs.com/package/@sharyn/browser), or the whole library (which is actually quite small, 379KB on disk, including all its dependencies). That's the simplest way to get started. The library is separated into 2 parts, `sharyn`, which goes in your `dependencies`, and `sharyn-dev`, which goes in your `devDependencies`.

```sh
npm i sharyn && npm i sharyn-dev --save-dev
# or
yarn add sharyn && yarn add --dev sharyn-dev
```

## Imports

And depending on what packages you chose to install, you have different ways to `import` or `require` a module:

```js
import getFormFields from '@sharyn/browser.getformfields' // lowercase for individual packages
import getFormFields from '@sharyn/browser/getFormFields'
import getFormFields from 'sharyn/browser/getFormFields'

import { getFormFields } from '@sharyn/browser'
import { getFormFields } from 'sharyn/browser'
import { getFormFields } from 'sharyn'

const getFormFields = require('@sharyn/browser.getformfields') // lowercase for individual packages
const getFormFields = require('@sharyn/browser/getFormFields')
const getFormFields = require('sharyn/browser/getFormFields')

const { getFormFields } = require('@sharyn/browser')
const { getFormFields } = require('sharyn/browser')
const { getFormFields } = require('sharyn')
```

### Credits

By **Jonathan Verrecchia** (**verekia**) [**Github**](https://github.com/verekia) • [**Twitter**](https://twitter.com/verekia) • [**Website**](https://verekia.com) – MIT License

_Sharyn_ is a reference to one of my favorite metalcore songs, [**Rose of Sharyn**](https://www.youtube.com/watch?v=PgMsACFMIq8) by Killswitch Engage.

Rose illustration by tiaesther_4360
