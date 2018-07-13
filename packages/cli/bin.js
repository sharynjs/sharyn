#! /usr/bin/env node
const { spawn } = require('child_process')
const fs = require('fs')

let command
let multiPartCommand = false
const scriptName = process.argv[2]

const clientWatch =
  './node_modules/.bin/parcel watch src/_client/client.js --public-url . -d dist/js -o bundle.js'

const rmLib = './node_modules/.bin/rimraf lib'
const rmDist = './node_modules/.bin/rimraf dist'
const rmCache = './node_modules/.bin/rimraf .cache' // For Parcel
const rmDistCache = [rmDist, rmCache]

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
    multiPartCommand = true
    const startServerWithoutClient =
      './node_modules/.bin/cross-env USE_CLIENT_BUNDLE=false ./node_modules/.bin/nodemon -w src -i dist -x "./node_modules/.bin/babel-node src/_server/server.js"'
    if (fs.existsSync(`${process.cwd()}/docker-compose.yml`)) {
      command = localServerSetup.concat(startServerWithoutClient).join(' && ')
    } else {
      command = startServerWithoutClient
    }

    break
  }
  case 'dev-client-only': {
    multiPartCommand = true
    const startServerWithoutSSR =
      './node_modules/.bin/cross-env ENABLE_SSR=false ./node_modules/.bin/babel-node src/_server/server.js'
    if (fs.existsSync(`${process.cwd()}/docker-compose.yml`)) {
      const firstSpawn = spawn(localServerSetup, { shell: true, stdio: 'inherit' })
      firstSpawn.on('close', code => {
        console.log(code)
        if (code === 0) {
          spawn(startServerWithoutSSR, { shell: true, stdio: 'inherit' })
          spawn(clientWatch, { shell: true, stdio: 'inherit' })
        }
      })
    } else {
      spawn(startServerWithoutSSR, { shell: true, stdio: 'inherit' })
      spawn(clientWatch, { shell: true, stdio: 'inherit' })
    }

    break
  }
  case 'lint': {
    const eslint = './node_modules/.bin/eslint src'
    const flow = './node_modules/.bin/flow'
    const madge = './node_modules/.bin/madge --circular src'
    command = [eslint, flow, madge].join(' && ')
    break
  }
  case 'test': {
    command = './node_modules/.bin/jest --coverage'
    break
  }
  case 'client-watch': {
    command = rmDistCache.concat(clientWatch).join(' && ')
    break
  }
  case 'prod-build': {
    const clientBuild =
      './node_modules/.bin/parcel build src/_client/client.js --no-source-maps -d dist/js -o bundle.js'
    const babel = './node_modules/.bin/babel src -d lib --ignore "**/*.test.js"'
    command = rmDistCache.concat([rmLib, clientBuild, babel]).join(' && ')
    break
  }
  default:
    // eslint-disable-next-line no-console
    console.error(`${process.argv[2]} is not a valid @sharyn/cli command.`)
    process.exit(1)
}

if (!multiPartCommand) {
  spawn(command, { shell: true, stdio: 'inherit' })
}
