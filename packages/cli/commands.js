// @flow

const binDir = null

const prefix = command => `${binDir || './node_modules/.bin/'}${command}`

const nodemon = prefix('nodemon -w src -i dist -x "babel-node src/_server/server.js"')

module.exports = {
  NODE_LIB_SERVER: 'node lib/_server/server.js',
  DOCKER_UP: 'docker-compose up -d',
  DOCKER_WAIT_PG:
    'until docker run --rm --link db:pg --net sharyn-net postgres:latest pg_isready -U postgres -h pg; do sleep 1; done',
  babel: prefix('babel src -d lib'),
  dbMigr: prefix('knex --knexfile src/_db/knex-config.js --cwd . migrate:latest'),
  dbSeed: prefix('knex --knexfile src/_db/knex-config.js --cwd . seed:run'),
  herokuLocal: prefix('cross-env NODE_ENV=production heroku local'),
  lint: prefix('eslint src'),
  typecheck: prefix('flow'),
  circular: prefix('madge --circular src'),
  test: prefix('jest --coverage'),
  rmDist: prefix('rimraf dist'), // Add .cache when switching back to Parcel
  rmLibDist: prefix('rimraf lib dist'), // Add .cache when switching back to Parcel
  clientWatch: prefix('webpack --mode=development --watch --progress'),
  clientBuild: prefix('webpack --mode=production --progress'),
  serverWatch: nodemon,
  serverWatchSsrOnly: `${prefix('cross-env SSR_ONLY=true')} ${nodemon}`,
  serverWatchNoSsr: `${prefix('cross-env NO_SSR=true')} ${nodemon}`,
}
