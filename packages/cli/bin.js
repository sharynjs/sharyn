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
} = require('./commands')

const childrenProcs = []
const bf = undefined

const mySpawn = cmd => {
  // eslint-disable-next-line no-console
  console.log(`${colors.magenta(`[sharyn]`)} ${colors.gray(cmd)}`)
  return spawn(cmd, { shell: true, stdio: 'inherit' })
}

const hasDocker = fs.existsSync(`${process.cwd()}/docker-compose.yml`)

const taskName = process.argv[2]

swit(
  taskName,
  [
    [
      'dev',
      () =>
        mySpawn(localServerSetupTask(bf, hasDocker)).on('close', code => {
          if (code === 0) {
            childrenProcs.push(mySpawn(serverWatchTask(bf)))
            childrenProcs.push(mySpawn(clientWatchTask(bf)))
          }
        }),
    ],
    [
      'dev-server-only',
      () =>
        mySpawn(localServerSetupTask(bf, hasDocker)).on('close', code => {
          if (code === 0) {
            childrenProcs.push(mySpawn(serverSsrOnlyWatchTask(bf)))
          }
        }),
    ],
    [
      'dev-client-only',
      () =>
        mySpawn(localServerSetupTask(bf, hasDocker)).on('close', code => {
          if (code === 0) {
            childrenProcs.push(mySpawn(serverClientOnlyWatchTask(bf)))
            childrenProcs.push(mySpawn(clientWatchTask(bf)))
          }
        }),
    ],
    ['prod-local', () => childrenProcs.push(mySpawn(prodLocalTask(bf, hasDocker)))],
    ['lint', () => childrenProcs.push(mySpawn(lintTask(bf)))],
    ['test', () => childrenProcs.push(mySpawn(testTask(bf)))],
    ['lint-test', () => childrenProcs.push(mySpawn(lintTestTask(bf)))],
  ],
  () => {
    // eslint-disable-next-line no-console
    console.error(`${taskName} is not a valid @sharyn/cli command.`)
    process.exit(1)
  },
)

childrenProcs.forEach(cp => {
  cp.on('exit', () => {
    childrenProcs.forEach(p => {
      p.exit(0)
    })
  })
})
