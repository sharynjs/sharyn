#! /usr/bin/env node

// @flow
/* eslint-disable no-unused-expressions */

const { spawn } = require('child_process')
const fs = require('fs')
const { swit } = require('@verekia/lib-lang')
const colors = require('colors/safe')

const { knexConfigPath } = require('./shared')
const {
  DOCKER_UP,
  DOCKER_UP_TEST,
  DOCKER_WAIT_PG,
  DOCKER_WAIT_PG_TEST,
  NODE_LIB_SERVER,
  dbMigr,
  dbMigrTest,
  dbSeed,
  dbSeedTest,
  rmDist,
  rmLibDist,
  serverWatch,
  clientWatch,
  clientBuild,
  serverWatchSsrOnly,
  serverWatchNoSsr,
  herokuLocal,
  babel,
  test,
  lint,
  typecheck,
} = require('./commands')

const hasDocker = fs.existsSync(`${process.cwd()}/docker-compose.yml`)
const hasHeroku = fs.existsSync(`${process.cwd()}/Procfile`)
const hasSeeds = fs.existsSync(`${process.cwd()}/src/_db/seeds`)

const mySpawn = cmd => {
  // eslint-disable-next-line no-console
  console.log(`${colors.magenta(`[sharyn]`)} ${colors.gray(cmd)}`)
  return spawn(cmd, { shell: true, stdio: 'inherit' })
}

const sequence = arr => arr.join(' && ')

const taskName = process.argv[2]

swit(
  taskName,
  [
    [
      'dev',
      () => {
        const firstCommands = []
        hasDocker && firstCommands.push(DOCKER_UP)
        knexConfigPath && firstCommands.push(DOCKER_WAIT_PG, dbMigr)
        hasSeeds && firstCommands.push(dbSeed)
        firstCommands.push(rmDist)
        mySpawn(sequence(firstCommands)).on('close', code => {
          if (code === 0) {
            mySpawn(serverWatch)
            mySpawn(clientWatch)
          }
        })
      },
    ],
    [
      'dev-ssr-only',
      () => {
        const commands = []
        hasDocker && commands.push(DOCKER_UP)
        knexConfigPath && commands.push(DOCKER_WAIT_PG, dbMigr)
        hasSeeds && commands.push(dbSeed)
        commands.push(serverWatchSsrOnly)
        mySpawn(sequence(commands))
      },
    ],
    [
      'dev-no-ssr',
      () => {
        const firstCommands = []
        hasDocker && firstCommands.push(DOCKER_UP)
        knexConfigPath && firstCommands.push(DOCKER_WAIT_PG, dbMigr)
        hasSeeds && firstCommands.push(dbSeed)
        firstCommands.push(rmDist)
        mySpawn(sequence(firstCommands)).on('close', code => {
          if (code === 0) {
            mySpawn(serverWatchNoSsr)
            mySpawn(clientWatch)
          }
        })
      },
    ],
    [
      'local-prod',
      () => {
        const commands = []
        hasDocker && commands.push(DOCKER_UP)
        knexConfigPath && commands.push(DOCKER_WAIT_PG, dbMigr)
        hasSeeds && commands.push(dbSeed)
        commands.push(rmLibDist, clientBuild, babel)
        hasHeroku ? commands.push(herokuLocal) : commands.push(NODE_LIB_SERVER)
        mySpawn(sequence(commands))
      },
    ],
    ['build-prod', () => mySpawn(sequence([rmLibDist, clientBuild, babel]))],
    ['lint', () => mySpawn(sequence([lint, typecheck]))],
    [
      'test',
      () => {
        const commands = []
        hasDocker && commands.push(DOCKER_UP_TEST)
        knexConfigPath && commands.push(DOCKER_WAIT_PG_TEST, dbMigrTest)
        hasSeeds && commands.push(dbSeedTest)
        commands.push(test)
        mySpawn(sequence(commands))
      },
    ],
    [
      'lint-test',
      () => {
        const commands = [lint, typecheck]
        hasDocker && commands.push(DOCKER_UP_TEST)
        knexConfigPath && commands.push(DOCKER_WAIT_PG_TEST, dbMigrTest)
        hasSeeds && commands.push(dbSeedTest)
        commands.push(test)
        mySpawn(sequence(commands))
      },
    ],
    ['migrate-db', () => mySpawn(dbMigr)],
  ],
  () => {
    // eslint-disable-next-line no-console
    console.error(`${taskName} is not a valid @sharyn/cli command.`)
    process.exit(1)
  },
)
