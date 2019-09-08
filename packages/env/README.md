# 🌹 @sharyn/env

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

## Usage

```bash
npm install --save-dev @sharyn/env
# or
yarn add --dev @sharyn/env
```

## @sharyn/env

With `@sharyn/env`, you can import your environment variables directly:

```js
import { NODE_ENV, PORT, DATABASE_URL } from '@sharyn/env'
```

This package simply runs `dotenv/config` and exports `process.env` for a convenient access.

Just use `@sharyn/env` in every file that needs access to the environment, and forget about `dotenv` and `process.env` completely.

## @sharyn/env.check

[@sharyn/env.check](https://github.com/sharynjs/sharyn/tree/master/packages/env.check) can also help you validate environment variables.

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>Sharyn</b></a>, a collection of utilities and helpers.
</p>

