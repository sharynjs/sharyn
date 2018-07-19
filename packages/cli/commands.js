// @flow

const fs = require('fs')

const { knexConfigPath } = require('./shared')

const pathToSharynWebpackConfig = 'node_modules/@sharyn/webpack-config'
const hasSharynWebpackConfig = fs.existsSync(`${pathToSharynWebpackConfig}/index.js`)

const pathToGlobalSetup = './src/_testing/global-setup.js'
const hasGlobalSetup = fs.existsSync(pathToGlobalSetup)
const pathToGlobalTeardown = './src/_testing/global-teardown.js'
const hasGlobalTeardown = fs.existsSync(pathToGlobalTeardown)

const dockerWaitPg = containerName =>
  `until docker run --rm --link ${containerName}:pg --net sharyn-net postgres:latest pg_isready -U postgres -h pg; do sleep 1; done`

const binDir = null

const prefix = command => `${binDir || './node_modules/.bin/'}${command}`

const nodemon = prefix('nodemon -w src -i dist -x "babel-node src/_server/server.js"')

const dbMigr = prefix(`knex --knexfile ${knexConfigPath || ''} --cwd . migrate:latest`)
const dbSeed = prefix(`knex --knexfile ${knexConfigPath || ''} --cwd . seed:run`)

const jestOptions = `${hasGlobalSetup ? `--globalSetup ${pathToGlobalSetup}` : ''} ${
  hasGlobalTeardown ? `--globalTeardown ${pathToGlobalTeardown}` : ''
}`

module.exports = {
  NODE_LIB_SERVER: 'node lib/_server/server.js',
  DOCKER_UP: 'docker-compose up -d',
  // flow-disable-next-line
  dockerDownTest: id => `docker rm -f ${id}`,
  DOCKER_UP_TEST: 'docker-compose up -d db-test',
  DOCKER_WAIT_PG: dockerWaitPg('db'),
  DOCKER_WAIT_PG_TEST: dockerWaitPg('db-test'),
  babel: prefix('babel src -d lib'),
  dbMigr,
  dbSeed,
  dbMigrTest: `${prefix('cross-env NODE_ENV=test')} ${dbMigr}`,
  herokuLocal: prefix('cross-env NODE_ENV=production heroku local'),
  lint: prefix('eslint src'),
  typecheck: prefix('flow'),
  testParallel: prefix(`jest --testPathIgnorePatterns .*.seq.test.js ${jestOptions}`),
  testSequencial: prefix(`jest --testMatch **/*.seq.test.js --runInBand ${jestOptions}`),
  rmDist: prefix('rimraf dist'), // Add .cache when switching back to Parcel
  rmLibDist: prefix('rimraf lib dist'), // Add .cache when switching back to Parcel
  clientWatch: prefix(
    `webpack-dev-server --mode=development --progress --hot ${
      hasSharynWebpackConfig ? `--config ${pathToSharynWebpackConfig}` : ''
    }`,
  ),
  clientBuild: prefix(
    `webpack --mode=production --progress ${
      hasSharynWebpackConfig ? `--config ${pathToSharynWebpackConfig}` : ''
    }`,
  ),
  serverWatch: nodemon,
  serverWatchSsrOnly: `${prefix('cross-env SSR_ONLY=true')} ${nodemon}`,
  serverWatchNoSsr: `${prefix('cross-env NO_SSR=true')} ${nodemon}`,
}
