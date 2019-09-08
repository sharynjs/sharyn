# 🌹 @sharyn/env.check

# Deprecated

Use [envalid](https://www.npmjs.com/package/envalid) instead. Example:

```js
const envalid = require('envalid')
const pick = require('lodash.pick')
const either = require('@sharyn/util.either')
const swit = require('@sharyn/util.swit')

const { email, bool, port, str } = envalid

const varDefs = {
  STAGE: str({ choices: ['dev', 'local-prod', 'staging', 'prod'] }),
  TRUE: bool(),
  EMAIL: email({ desc: 'The email of the admin' }),
  PORT: port(),
}

const env = envalid.cleanEnv(
  process.env,
  {
    STAGE: varDefs.STAGE,
    ...swit(
      process.env.STAGE,
      ['dev', 'local-prod', pick(varDefs, 'TRUE', 'PORT')],
      ['staging', 'prod', pick(varDefs, 'EMAIL', 'PORT')]
    ),
  },
  { strict: true }
)

module.exports = env
```

**`@sharyn/env/check`** provides 3 methods to check that your `process.env` is loaded with the right variables.

## Installation

```sh
npm i @sharyn/env.check
# or
yarn add @sharyn/env.check
```

You can alternatively install the [**`@sharyn/browser`**](https://github.com/sharynjs/sharyn/tree/master/browser) package, or the entire [**`sharyn`**](https://github.com/sharynjs/sharyn) library.

## Usage

In the following example, the `STAGE` corresponds to the various deployment stages, which I like to name `dev`, `local-prod` (with `NODE_ENV` set to `production`), `staging`, and `prod`.

Create a file to check your env, `env-check.js` for instance:

```js
import 'dotenv/config'
import { check, checkPresent, checkAbsent } from '@sharyn/env/check'

checkPresent('DATABASE_URL', 'REDIS_URL') // Checked for all stages

if (process.env.STAGE === 'dev') {
  checkPresent('WEBPACK_DEV_SERVER_PORT')
  checkAbsent('S3_BUCKET', 'ERROR_REPORTING')
}

if (process.env.STAGE === 'prod') {
  checkPresent('S3_BUCKET', 'ERROR_REPORTING')
  checkAbsent('WEBPACK_DEV_SERVER_PORT')
  check('API_URL', url => url.startsWith('https://'), name => `${name} is not an HTTPS URL.`)
}
```

You should check your environment variables at runtime, at the very beginning or your application. Before the initialization of your Express server for instance.

```js
import './env-check'
```

## Imports

Depending on the package you are using, you can `import` or `require` `getFormFields` in the following ways:

```js
import { check, checkPresent, checkAbsent } from '@sharyn/env.check'
import { check, checkPresent, checkAbsent } from '@sharyn/env/check'
import { check, checkPresent, checkAbsent } from 'sharyn/env/check'
```

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>Sharyn</b></a>, a collection of utilities and helpers.
</p>
