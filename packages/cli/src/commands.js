// @flow

// flow-disable-next-line
import { hasFile, pathCascade } from '@sharyn/check-setup'
// flow-disable-next-line
import { STORYBOOK_PORT } from '@sharyn/env'

import { knexConfigPath } from './shared'

const hasCustomWebpackConfig = hasFile('webpack.config.js')

const pathToSharynWebpackConfig = pathCascade(
  'node_modules/@sharyn/webpack-config',
  'node_modules/sharyn/webpack-config',
)
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

const webpackProd = prefix(
  `webpack --mode=production --progress ${
    hasCustomWebpackConfig ? '' : `--config ${pathToSharynWebpackConfig}`
  }`,
)

const webpackStats = prefix(
  `webpack --mode=production --progress --json ${
    hasCustomWebpackConfig ? '' : `--config ${pathToSharynWebpackConfig}`
  } > webpack-stats.json`,
)

const jestOptions = `${hasGlobalSetup ? `--globalSetup ${pathToGlobalSetup}` : ''} ${
  hasGlobalTeardown ? `--globalTeardown ${pathToGlobalTeardown}` : ''
}`

export const startStorybook = `start-storybook -p ${STORYBOOK_PORT ?? 8025}`
export const BUILD_STORYBOOK = 'build-storybook -o public/storybook'
export const GIT_ADD_STORYBOOK = 'git add public/storybook'

export const PUSH_ORIGIN_MASTER = 'git push origin master'
export const PUSH_HEROKU_STAGING_MASTER = 'git push heroku-staging master'
export const SAY_DONE = 'say done'
export const HEROKU_PIPELINE_PROMOTE = 'heroku pipelines:promote'

export const nodeLocalProd = prefix(
  'cross-env NODE_ENV=production ENV_TYPE=local-production node lib/_server/server.js',
)
export const DOCKER_UP = 'docker-compose up -d db redis'
export const dockerDownTest = (id: string) => `docker rm -f ${id}`
export const DOCKER_UP_TEST = 'docker-compose up -d db-test redis-test'
export const DOCKER_WAIT_PG = dockerWaitPg('db')
export const DOCKER_WAIT_PG_TEST = dockerWaitPg('db-test')
export const babel = prefix('babel src -d lib --ignore **/*.test.js')
export const dbMigr = migrate
export const dbSeed = prefix(`knex --knexfile ${knexConfigPath || ''} --cwd . seed:run`)
export const dbMigrTest = `${prefix('cross-env NODE_ENV=test')} ${migrate}`
export const herokuLocalProd = prefix(
  'cross-env NODE_ENV=production ENV_TYPE=local-production heroku local',
)
export const lint = prefix('eslint src --fix --ext .js,.jsx')
export const typecheck = prefix('flow')
export const testUnit = prefix(`jest .unit.test.js --testEnvironment node ${jestOptions}`)
export const testE2E = prefix(
  `jest .e2e.test.js --preset jest-puppeteer --runInBand ${jestOptions}`,
)
export const rmBundle = prefix('rimraf dist/js/bundle.js') // Add .cache when switching back to Parcel
export const rmLibAndBundle = prefix('rimraf lib dist/js/bundle.js') // Add .cache when switching back to Parcel
export const clientWatch = prefix(
  `webpack-dev-server --mode=development --progress --hot ${
    hasCustomWebpackConfig ? '' : `--config ${pathToSharynWebpackConfig}`
  }`,
)
export const clientBuild = `${prefix('cross-env NODE_ENV=production')} ${webpackProd}`
export const stats = `${prefix('cross-env NODE_ENV=production')} ${webpackStats}`
export const serverWatch = nodemon
export const serverWatchSsrOnly = `${prefix('cross-env SSR_ONLY=true')} ${nodemon}`
export const serverWatchNoSsr = `${prefix('cross-env NO_SSR=true')} ${nodemon}`
