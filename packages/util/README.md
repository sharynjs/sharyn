# 🌹 @sharyn/util

[![npm](https://img.shields.io/npm/v/@sharyn/util.svg)](https://www.npmjs.com/package/@sharyn/util)

Some general utils, like Lodash.

## 🌹 Install

```bash
yarn add @sharyn/util
```

## 🌹 Usage

### Import style

You can either import the entire library or just one module:

```js

import { isEither } from '@sharyn/util'

import isEither from '@sharyn/util/is-either'
```

### isEither

🌲 [**Not structuring**](https://github.com/sharynjs/sharyn#-structuring-factor)

```js
import { isEither } from '@sharyn/util'

isEither(NODE_ENV, 'production', 'test') // true or false
isEither(NODE_ENV, ['production', 'test']) // true or false
```
