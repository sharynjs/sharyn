# 🌹 @sharyn/cli

[![npm](https://img.shields.io/npm/v/@sharyn/cli.svg)](https://www.npmjs.com/package/@sharyn/cli)

This package provides CLI tasks to use as your NPM scripts.

## 🌹 Install

```bash
npx install-peerdeps -o -Y @sharyn/cli-peer-deps && npx install-peerdeps -o -Y -d @sharyn/cli-peer-devdeps && yarn add @sharyn/cli
```

## 🌹 Usage

In your `package.json`, add the following scripts:

```json
  "scripts": {
    "start": "sharyn dev",
    "dev-ssr-only": "sharyn dev-ssr-only",
    "dev-no-ssr": "sharyn dev-no-ssr",
    "local-prod": "sharyn local-prod",
    "lint": "sharyn lint",
    "test": "sharyn test",
    "heroku-postbuild": "sharyn build-prod",
    "precommit": "sharyn lint-test"
  },
```

## 🌹 Tasks

### `dev`

Runs sequencially:

- If a `docker-compose.yml` file is present:
  - `docker-compose up -d`
- If a `knex-config.js` file is present at `src/_db/knex-config.js` or provided via `@sharyn/db`:
  - `until docker run --rm --link db:pg --net sharyn-net postgres:latest pg_isready -U postgres -h pg; do sleep 1; done`
  - `knex --knexfile [path-to-knex-config.js] --cwd . migrate:latest`
  - If a `src/_db/seeds` folder is present:
    - `knex --knexfile [path-to-knex-config.js] --cwd . seed:run`
- `rimraf dist`

Then runs in parallel:

- `nodemon -w src -i dist -x "babel-node src/_server/server.js"`
- `webpack-dev-server --mode=development --progress --hot [--config node_modules/@sharyn/webpack-config if @sharyn/webpack-config installed]`

### `dev-ssr-only`

Runs sequencially:

- If a `docker-compose.yml` file is present:
  - `docker-compose up -d`
- If a `knex-config.js` file is present at `src/_db/knex-config.js` or provided via `@sharyn/db`:
  - `until docker run --rm --link db:pg --net sharyn-net postgres:latest pg_isready -U postgres -h pg; do sleep 1; done`
  - `knex --knexfile [path-to-knex-config.js] --cwd . migrate:latest`
  - If a `src/_db/seeds` folder is present:
    - `knex --knexfile [path-to-knex-config.js] --cwd . seed:run`
- `cross-env SSR_ONLY=true nodemon -w src -i dist -x "babel-node src/_server/server.js"`

### `dev-no-ssr`

Runs sequencially:

- If a `docker-compose.yml` file is present:
  - `docker-compose up -d`
- If a `knex-config.js` file is present at `src/_db/knex-config.js` or provided via `@sharyn/db`:
  - `until docker run --rm --link db:pg --net sharyn-net postgres:latest pg_isready -U postgres -h pg; do sleep 1; done`
  - `knex --knexfile [path-to-knex-config.js] --cwd . migrate:latest`
  - If a `src/_db/seeds` folder is present:
    - `knex --knexfile [path-to-knex-config.js] --cwd . seed:run`
- `rimraf dist`

Then runs in parallel:

- `cross-env NO_SSR=true nodemon -w src -i dist -x "babel-node src/_server/server.js"`
- `webpack-dev-server --mode=development --progress --hot [--config node_modules/@sharyn/webpack-config if @sharyn/webpack-config installed]`

### `local-prod`

Runs sequencially:

- If a `docker-compose.yml` file is present:
  - `docker-compose up -d`
- If a `knex-config.js` file is present at `src/_db/knex-config.js` or provided via `@sharyn/db`:
  - `until docker run --rm --link db:pg --net sharyn-net postgres:latest pg_isready -U postgres -h pg; do sleep 1; done`
  - `knex --knexfile [path-to-knex-config.js] --cwd . migrate:latest`
  - If a `src/_db/seeds` folder is present:
    - `knex --knexfile [path-to-knex-config.js] --cwd . seed:run`
- `rimraf lib dist`
- `webpack --mode=production --progress [--config node_modules/@sharyn/webpack-config if @sharyn/webpack-config installed]`
- `babel src -d lib`
- If a `Procfile` file is present:
  - `cross-env NODE_ENV=production heroku local`
- If not:
  - `node lib/_server/server.js`

### `build-prod`

Runs sequencially:

- `rimraf lib dist`
- `webpack --mode=production --progress [--config node_modules/@sharyn/webpack-config if @sharyn/webpack-config installed]`
- `babel src -d lib`

### `migrate-db`

Runs `knex --knexfile [path-to-knex-config.js] --cwd . migrate:latest`

With `[path-to-knex-config.js]` being `src/_db/knex-config.js` or the one provided by `@sharyn/db`

Useful for the `release` command in Heroku's `Procfile` or on its own during local development.

### `lint`

Runs sequencially:

- `eslint src`
- `flow`

### `test`

Runs sequencially:

- If a `docker-compose.yml` file is present:
  - `docker-compose up -d db-test`
- If a `knex-config.js` file is present at `src/_db/knex-config.js` or provided via `@sharyn/db`:
  - `until docker run --rm --link db-test:pg --net sharyn-net postgres:latest pg_isready -U postgres -h pg; do sleep 1; done`
  - `cross-env NODE_ENV=test knex --knexfile [path-to-knex-config.js] --cwd . migrate:latest`
- `jest --coverage`

### `lint-test`

Runs sequencially:

- `eslint src`
- `flow`
- If a `docker-compose.yml` file is present:
  - `docker-compose up -d db-test`
- If a `knex-config.js` file is present at `src/_db/knex-config.js` or provided via `@sharyn/db`:
  - `until docker run --rm --link db-test:pg --net sharyn-net postgres:latest pg_isready -U postgres -h pg; do sleep 1; done`
  - `cross-env NODE_ENV=test knex --knexfile [path-to-knex-config.js] --cwd . migrate:latest`
- `jest --coverage`

Useful as the `precommit` Git hook or on its own.
