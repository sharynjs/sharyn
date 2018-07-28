# 🌹 @sharyn/util

[![npm](https://img.shields.io/npm/v/@sharyn/util.svg)](https://www.npmjs.com/package/@sharyn/util)

Some general utils, like Lodash.

## 🌹 Install

```bash
yarn add @sharyn/util
```

## 🌹 Import style

You can either import the entire library or just one module:

```js
import { someUtil } from '@sharyn/util' // More compact if multiple imports (ok on the server)
import someUtil from '@sharyn/util/some-util' // Reduces the bundle size (recommended on the client)
```

## 🌹 isEither

🌲 [**Not structuring**](https://github.com/sharynjs/sharyn#-structuring-factor)

An utilily function to replace `if (foo === 'a' || foo === 'b' || foo === 'c')` by `if (isEither(foo, 'a', 'b', 'c'))` or `if (isEither(foo, ['a', 'b', 'c']))`

```js
import { isEither } from '@sharyn/util'

isEither(NODE_ENV, 'production', 'test') // true or false
isEither(NODE_ENV, ['production', 'test']) // true or false
```
