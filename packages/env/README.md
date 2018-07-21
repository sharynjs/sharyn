# 🌹 @sharyn/env

[![npm](https://img.shields.io/npm/v/@sharyn/env.svg)](https://www.npmjs.com/package/@sharyn/env)

This package helps accessing your environment variables.

## 🌹 Install

```bash
yarn add @sharyn/env
```

## 🌹 Usage

`@sharyn/env` reads the `.env` file, parses the `process.env` object with `rend-env` (no key transformation), and exposes its keys to make it easy to import them.

```js
import { PORT } from '@sharyn/env'

PORT // 8000
typeof PORT // 'number'
```

`@sharyn/env` defaults `NODE_ENV` to `development` if it is `undefined`, and exposes the `IS_PROD_ENV`, `IS_DEV_ENV`, and `IS_TEST_ENV` boolean properties:

```js
import { NODE_ENV, IS_DEV_ENV, IS_PROD_ENV, IS_TEST_ENV } from '@sharyn/env'

console.log(NODE_ENV) // 'development'
console.log(IS_DEV_ENV) // true
console.log(IS_PROD_ENV) // false
console.log(IS_TEST_ENV) // false
```

You can use a `.env-check.js` file at the root of your project to check the validity of your env:

```js
module.exports = parsedEnv => {
  if (parsedEnv.PORT < 8000) {
    throw Error('PORT must be superior to 8000')
  }

  if (!parsedEnv.DATABASE_URL) {
    throw Error('DATABASE_URL is missing in the environment')
  }
}
```

An `ENV_TYPE` variable can be useful to have different rules based on your environment:

```js
module.exports = ({ ENV_TYPE, SENTRY_KEY }) => {
  if (ENV_TYPE === 'local' || ENV_TYPE === 'staging' && SENTRY_KEY) {
    throw Error('You cannot have a SENTRY_KEY env variable in local and staging environments')
  }
}

```
