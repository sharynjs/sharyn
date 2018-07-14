const prefix = (command, binFolder = './node_modules/.bin/') => `${binFolder}${command}`

const serverWatch = bf => prefix('nodemon -w src -i dist src/_server/require-hook.js', bf)
const clientWatch = bf => prefix('webpack --mode=development --watch --progress', bf)
const clientBuild = bf => prefix('webpack --mode=production --progress', bf)

const rmLib = bf => prefix('rimraf lib', bf)
const rmDist = bf => prefix('rimraf dist', bf)
// export const rmParcelCache = bf => prefix('rimraf .cache', bf)

const lint = bf => prefix('eslint src', bf)
const typecheck = bf => prefix('flow', bf)
const circular = bf => prefix('madge --circular src', bf)
const test = bf => prefix('jest --coverage', bf)

const DOCKER_UP = 'docker-compose up -d'
const DOCKER_WAIT_PG =
  'until docker run --rm --link db:pg --net sharyn-net postgres:latest pg_isready -U postgres -h pg; do sleep 1; done'

const herokuLocal = bf => prefix('cross-env NODE_ENV=production heroku local', bf)

const dbMigr = bf => prefix('knex --knexfile src/_db/knex-config.js --cwd . migrate:latest', bf)
const dbSeed = bf => prefix('knex --knexfile src/_db/knex-config.js --cwd . seed:run', bf)

const babel = bf => prefix('babel src -d lib --ignore "**/*.test.js"', bf)

const sequence = arr => arr.join(' && ')

// Combinations

const docker = sequence([DOCKER_UP, DOCKER_WAIT_PG])
const db = bf => sequence([dbMigr(bf), dbSeed(bf)])
const localServerSetup = bf => sequence([docker, db(bf)])
const prodBuild = bf => sequence([rmDist(bf), rmLib(bf), clientBuild(bf), babel(bf)])

// High-level tasks

// export const rmDistParcelCacheTask = bf => sequence([rmDist(bf), rmParcelCache(bf)])
const lintTask = bf => sequence([lint(bf), typecheck(bf), circular(bf)])
const lintTestTask = bf => sequence([lintTask(bf), test(bf)])
const testTask = test
const prodLocalWithDockerTask = bf =>
  sequence([localServerSetup(bf), prodBuild(bf), herokuLocal(bf)])
const prodLocalWithoutDockerTask = bf => sequence([prodBuild(bf), herokuLocal(bf)])

module.exports = {
  lintTask,
  lintTestTask,
  testTask,
  prodLocalWithDockerTask,
  prodLocalWithoutDockerTask,
}
