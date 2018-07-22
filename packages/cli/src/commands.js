// @flow

// flow-disable-next-line
import { hasFile } from '@sharyn/check-setup'

import { knexConfigPath } from './shared'

const pathToSharynWebpackConfig = 'node_modules/@sharyn/webpack-config'
const hasSharynWebpackConfig = hasFile(`${pathToSharynWebpackConfig}/index.js`)

const pathToGlobalSetup = './src/_testing/global-setup.js'
const hasGlobalSetup = hasFile(pathToGlobalSetup)
const pathToGlobalTeardown = './src/_testing/global-teardown.js'
const hasGlobalTeardown = hasFile(pathToGlobalTeardown)

const dockerWaitPg = containerName =>
  `until docker run --rm --link ${containerName}:pg --net sharyn-net postgres:latest pg_isready -U postgres -h pg; do sleep 1; done`

const binDir = null

const prefix = command => `${binDir || './node_modules/.bin/'}${command}`

const nodemon = prefix('nodemon -w src -i dist -x "babel-node src/_server/server.js"')

const migrate = prefix(`knex --knexfile ${knexConfigPath || ''} --cwd . migrate:latest`)

const jestOptions = `${hasGlobalSetup ? `--globalSetup ${pathToGlobalSetup}` : ''} ${
  hasGlobalTeardown ? `--globalTeardown ${pathToGlobalTeardown}` : ''
}`

export const NODE_LIB_SERVER = 'node lib/_server/server.js'
export const DOCKER_UP = 'docker-compose up -d'
export const dockerDownTest = (id: string) => `docker rm -f ${id}`
export const DOCKER_UP_TEST = 'docker-compose up -d db-test'
export const DOCKER_WAIT_PG = dockerWaitPg('db')
export const DOCKER_WAIT_PG_TEST = dockerWaitPg('db-test')
export const babel = prefix('babel src -d lib')
export const dbMigr = migrate
export const dbSeed = prefix(`knex --knexfile ${knexConfigPath || ''} --cwd . seed:run`)
export const dbMigrTest = `${prefix('cross-env NODE_ENV=test')} ${migrate}`
export const herokuLocal = prefix('cross-env NODE_ENV=production heroku local')
export const lint = prefix('eslint src --fix --ext .js,.jsx')
export const typecheck = prefix('flow')
export const testParallel = prefix(
  `jest --testPathIgnorePatterns /lib/* .*\\.seq\\.test.js ${jestOptions}`,
)
export const testSequencial = prefix(
  `jest --preset jest-puppeteer --testPathIgnorePatterns /lib/* --testMatch **/*.seq.test.js --runInBand ${jestOptions}`,
)
export const rmBundle = prefix('rimraf dist/js/bundle.js') // Add .cache when switching back to Parcel
export const rmLibAndBundle = prefix('rimraf lib dist/js/bundle.js') // Add .cache when switching back to Parcel
export const clientWatch = prefix(
  `webpack-dev-server --mode=development --progress --hot ${
    hasSharynWebpackConfig ? `--config ${pathToSharynWebpackConfig}` : ''
  }`,
)
export const clientBuild = prefix(
  `webpack --mode=production --progress ${
    hasSharynWebpackConfig ? `--config ${pathToSharynWebpackConfig}` : ''
  }`,
)
export const serverWatch = nodemon
export const serverWatchSsrOnly = `${prefix('cross-env SSR_ONLY=true')} ${nodemon}`
export const serverWatchNoSsr = `${prefix('cross-env NO_SSR=true')} ${nodemon}`
