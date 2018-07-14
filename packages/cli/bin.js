#! /usr/bin/env node
const { spawn } = require('child_process')
const fs = require('fs')
const { swit } = require('@verekia/lib-lang')
const colors = require('colors/safe')

const {
  lintTask,
  testTask,
  lintTestTask,
  prodLocalTask,
  localServerSetupTask,
  serverWatchTask,
  serverSsrOnlyWatchTask,
  clientWatchTask,
  serverClientOnlyWatchTask,
  prodBuildTask,
  migrateDbTask,
} = require('./commands')

const bf = undefined

const mySpawn = cmd => {
  // eslint-disable-next-line no-console
  console.log(`${colors.magenta(`[sharyn]`)} ${colors.gray(cmd)}`)
  return spawn(cmd, { shell: true, stdio: 'inherit' })
}

const hasDocker = fs.existsSync(`${process.cwd()}/docker-compose.yml`)
const hasHeroku = fs.existsSync(`${process.cwd()}/Procfile`)
const hasPg = fs.existsSync(`${process.cwd()}/src/_db/knex-config.js`)

const taskName = process.argv[2]

swit(
  taskName,
  [
    [
      'dev',
      () =>
        mySpawn(localServerSetupTask(bf, hasDocker, hasPg)).on('close', code => {
          if (code === 0) {
            mySpawn(serverWatchTask(bf))
            mySpawn(clientWatchTask(bf))
          }
        }),
    ],
    [
      'dev-server-only',
      () =>
        mySpawn(localServerSetupTask(bf, hasDocker, hasPg)).on('close', code => {
          if (code === 0) {
            mySpawn(serverSsrOnlyWatchTask(bf))
          }
        }),
    ],
    [
      'dev-client-only',
      () =>
        mySpawn(localServerSetupTask(bf, hasDocker, hasPg)).on('close', code => {
          if (code === 0) {
            mySpawn(serverClientOnlyWatchTask(bf))
            mySpawn(clientWatchTask(bf))
          }
        }),
    ],
    ['prod-local', () => mySpawn(prodLocalTask(bf, hasDocker, hasHeroku))],
    ['prod-build', () => mySpawn(prodBuildTask(bf))],
    ['lint', () => mySpawn(lintTask(bf))],
    ['test', () => mySpawn(testTask(bf))],
    ['lint-test', () => mySpawn(lintTestTask(bf))],
    ['migrate-db', () => mySpawn(migrateDbTask, bf)],
  ],
  () => {
    // eslint-disable-next-line no-console
    console.error(`${taskName} is not a valid @sharyn/cli command.`)
    process.exit(1)
  },
)
