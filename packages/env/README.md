# 🌹 @sharyn-env

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

## @sharyn/env/check

`@sharyn/env/check` provides 3 methods to check that your `process.env` is loaded with the right variables. In the following example, the `STAGE` corresponds to the various deployment stages, which I like to name `dev`, `local-prod` (with `NODE_ENV` set to `production`), `staging`, and `prod`.

Create a file to check your env, `env-check.js` for instance:

```js
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

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>Sharyn</b></a>, a collection of utilities and helpers.
</p>

