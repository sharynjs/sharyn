#! /usr/bin/env node
const { spawn } = require('child_process')

let command
const scriptName = process.argv[2]

const rmLib = './node_modules/.bin/rimraf lib'
const rmDist = './node_modules/.bin/rimraf dist'
const rmCache = './node_modules/.bin/rimraf .cache'
const rmDistCache = [rmDist, rmCache]

const babel = './node_modules/.bin/babel src -d lib --ignore "**/*.test.js"'

const parcelBuild =
  './node_modules/.bin/parcel build src/_client/client.js --no-source-maps -d dist/js -o bundle.js'

const dockerUp = 'docker-compose up -d'
const dockerWaitPg =
  'until docker run --rm --link db:pg --net js-stack-net postgres:latest pg_isready -U postgres -h pg; do sleep 1; done'

const dbMigr = './node_modules/.bin/knex --knexfile src/_db/knex-config.js --cwd . migrate:latest'
const dbSeed = './node_modules/.bin/knex --knexfile src/_db/knex-config.js --cwd . seed:run'

const localServerSetup = [dockerUp, dockerWaitPg, dbMigr, dbSeed]

switch (scriptName) {
  case 'dev': {
    // double spawn?
    break
  }
  case 'dev-server-only': {
    command = localServerSetup
      .concat(
        './node_modules/.bin/cross-env USE_CLIENT_BUNDLE=false ./node_modules/.bin/nodemon -w src -i dist -x "./node_modules/.bin/babel-node src/_server/server.js"',
      )
      .join(' && ')
    break
  }
  case 'dev-client-only': {
    command =
      './node_modules/.bin/cross-env ENABLE_SSR=false ./node_modules/.bin/babel-node src/_server/server.js'
    break
  }
  case 'lint': {
    const eslint = './node_modules/.bin/eslint src'
    const flow = './node_modules/.bin/flow'
    const madge = './node_modules/.bin/madge --circular src'
    command = [eslint, flow, madge].join(' && ')
    break
  }
  case 'babel': {
    command = [rmLib, babel].join(' && ')
    break
  }
  case 'test': {
    command = './node_modules/.bin/jest --coverage'
    break
  }
  case 'client-build': {
    command = rmDistCache.concat(parcelBuild).join(' && ')
    break
  }
  case 'client-watch': {
    const parcelWatch =
      './node_modules/.bin/parcel watch src/_client/client.js --public-url . -d dist/js -o bundle.js'
    command = rmDistCache.concat(parcelWatch).join(' && ')
    break
  }
  case 'prod-build': {
    command = rmDistCache.concat([rmLib, parcelBuild, babel]).join(' && ')
    break
  }
  default:
    // eslint-disable-next-line no-console
    console.error(`${process.argv[2]} is not a valid @sharyn/cli command.`)
    process.exit(1)
}

spawn(command, { shell: true, stdio: 'inherit' })
