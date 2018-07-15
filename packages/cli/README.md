# 🌹 @sharyn/cli

[![npm](https://img.shields.io/npm/v/@sharyn/cli.svg)](https://www.npmjs.com/package/@sharyn/cli)

This package provides CLI tasks to use as your NPM scripts.

## Install

```bash
npx install-peerdeps -o -Y @sharyn/cli-peer-deps && npx install-peerdeps -o -Y -d @sharyn/cli-peer-devdeps && yarn add --dev @sharyn/cli
```

## Usage

In your `package.json`, add the following scripts:

```json
  "scripts": {
    "start": "sharyn dev",
    "dev-ssr-only": "sharyn dev-ssr-only",
    "dev-no-ssr": "sharyn dev-no-ssr",
    "prod-local": "sharyn prod-local",
    "lint": "sharyn lint",
    "test": "sharyn test",
    "heroku-postbuild": "sharyn prod-build",
    "precommit": "sharyn lint-test"
  },
```

## Tasks

### `dev`

Runs sequencially:

- If a `docker-compose.yml` file is present:
  - `docker-compose up -d`
- If a `src/_db/knex-config.js` file is present:
  - `until docker run --rm --link db:pg --net sharyn-net postgres:latest pg_isready -U postgres -h pg; do sleep 1; done`
  - `knex --knexfile src/_db/knex-config.js --cwd . migrate:latest`
  - `knex --knexfile src/_db/knex-config.js --cwd . seed:run`
- `rimraf dist`

Then runs in parallel:

- `nodemon -w src -i dist -x "babel-node src/_server/server.js"`
- `webpack-dev-server --mode=development --progress --hot [--config node_modules/@sharyn/webpack-config if @sharyn/webpack-config installed]`

### `dev-ssr-only`

Runs sequencially:

- If a `docker-compose.yml` file is present:
  - `docker-compose up -d`
- If a `src/_db/knex-config.js` file is present:
  - `until docker run --rm --link db:pg --net sharyn-net postgres:latest pg_isready -U postgres -h pg; do sleep 1; done`
  - `knex --knexfile src/_db/knex-config.js --cwd . migrate:latest`
  - `knex --knexfile src/_db/knex-config.js --cwd . seed:run`
- `cross-env SSR_ONLY=true nodemon -w src -i dist -x "babel-node src/_server/server.js"`

### `dev-no-ssr`

Runs sequencially:

- If a `docker-compose.yml` file is present:
  - `docker-compose up -d`
- If a `src/_db/knex-config.js` file is present:
  - `until docker run --rm --link db:pg --net sharyn-net postgres:latest pg_isready -U postgres -h pg; do sleep 1; done`
  - `knex --knexfile src/_db/knex-config.js --cwd . migrate:latest`
  - `knex --knexfile src/_db/knex-config.js --cwd . seed:run`
- `rimraf dist`

Then runs in parallel:

- `cross-env NO_SSR=true nodemon -w src -i dist -x "babel-node src/_server/server.js"`
- `webpack-dev-server --mode=development --progress --hot [--config node_modules/@sharyn/webpack-config if @sharyn/webpack-config installed]`

### `prod-local`

Runs sequencially:

- If a `docker-compose.yml` file is present:
  - `docker-compose up -d`
- If a `src/_db/knex-config.js` file is present:
  - `until docker run --rm --link db:pg --net sharyn-net postgres:latest pg_isready -U postgres -h pg; do sleep 1; done`
  - `knex --knexfile src/_db/knex-config.js --cwd . migrate:latest`
  - `knex --knexfile src/_db/knex-config.js --cwd . seed:run`
- `rimraf lib dist`
- `webpack --mode=production --progress [--config node_modules/@sharyn/webpack-config if @sharyn/webpack-config installed]`
- `babel src -d lib`
- If a `Procfile` file is present:
  - `cross-env NODE_ENV=production heroku local`
- If not:
  - `node lib/_server/server.js`

### `prod-build`

Runs sequencially:

- `rimraf lib dist`
- `webpack --mode=production --progress [--config node_modules/@sharyn/webpack-config if @sharyn/webpack-config installed]`
- `babel src -d lib`

### `migrate-db`

Runs `knex --knexfile src/_db/knex-config.js --cwd . migrate:latest`

Useful for the `release` command in Heroku's `Procfile` or on its own.

### `lint`

Runs sequencially:

- `eslint src`
- `flow`
- `madge --circular src`

### `test`

Runs `jest --coverage`

### `lint-test`

Runs sequencially:

- `eslint src`
- `flow`
- `madge --circular src`
- `jest --coverage`

Useful as the `precommit` Git hook or on its own.
