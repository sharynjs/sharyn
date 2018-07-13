#! /usr/bin/env node
const { spawn } = require('child_process')
const fs = require('fs')

let command
let multiPartCommand = false
const scriptName = process.argv[2]

const nodemonCommand =
  './node_modules/.bin/nodemon -w src -i dist -x "./node_modules/.bin/babel-node src/_server/server.js"'

const clientWatch = './node_modules/.bin/webpack --mode=development --watch'

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

const runLocalSetupThenServer = (serverCommand, runClientWatch = true) => {
  multiPartCommand = true
  if (fs.existsSync(`${process.cwd()}/docker-compose.yml`)) {
    const firstSpawn = spawn(localServerSetup.join(' && '), { shell: true, stdio: 'inherit' })
    firstSpawn.on('close', code => {
      if (code === 0) {
        spawn(serverCommand, { shell: true, stdio: 'inherit' })
        if (runClientWatch) {
          spawn(rmDistCache.concat(clientWatch).join(' && '), { shell: true, stdio: 'inherit' })
        }
      }
    })
  } else {
    spawn(serverCommand, { shell: true, stdio: 'inherit' })
    if (runClientWatch) {
      spawn(rmDistCache.concat(clientWatch).join(' && '), { shell: true, stdio: 'inherit' })
    }
  }
}

switch (scriptName) {
  case 'dev': {
    runLocalSetupThenServer(nodemonCommand)
    break
  }
  case 'dev-server-only': {
    runLocalSetupThenServer(
      `./node_modules/.bin/cross-env USE_CLIENT_BUNDLE=false ${nodemonCommand}`,
      false,
    )
    break
  }
  case 'dev-client-only': {
    runLocalSetupThenServer(`./node_modules/.bin/cross-env ENABLE_SSR=false ${nodemonCommand}`)
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
  case 'prod-build': {
    const clientBuild = './node_modules/.bin/webpack --mode=production'
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
