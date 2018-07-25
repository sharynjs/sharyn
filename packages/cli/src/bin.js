#! /usr/bin/env node

// @flow

import { EOL } from 'os'
import { execSync, spawn } from 'child_process'
import { swit } from '@verekia/lib-lang'
import colors from 'colors/safe'
// flow-disable-next-line
import { hasFile } from '@sharyn/check-setup'
import { knexConfigPath } from './shared'

import {
  DOCKER_UP,
  DOCKER_UP_TEST,
  DOCKER_WAIT_PG,
  DOCKER_WAIT_PG_TEST,
  nodeLocalProd,
  dockerDownTest,
  dbMigr,
  dbMigrTest,
  dbSeed,
  rmBundle,
  rmLibAndBundle,
  serverWatch,
  clientWatch,
  clientBuild,
  serverWatchSsrOnly,
  serverWatchNoSsr,
  herokuLocalProd,
  babel,
  testParallel,
  testSequencial,
  lint,
  typecheck,
} from './commands'

const hasDocker = hasFile('docker-compose.yml')
const hasHeroku = hasFile('Procfile')
const hasSeeds = hasFile('/src/_db/seeds')

const getDbTestProcessId = () => {
  const dbTestContainerName = 'db-test'

  const result = execSync(`docker ps -q --filter="name=${dbTestContainerName}"`).toString()
  const ids = result.split(EOL).filter(x => x)
  if (ids.length > 1) {
    throw Error(`Multiple running processes found for ${dbTestContainerName}`)
  }
  return ids[0]
}

const mySpawn = cmd => {
  // eslint-disable-next-line no-console
  console.log(
    `${colors.magenta(`[sharyn/cli]`)} ${colors.gray(cmd)}`.replace(
      /\.\/node_modules\/\.bin\//g,
      '',
    ),
  )
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
        knexConfigPath && hasSeeds && firstCommands.push(dbSeed)
        firstCommands.push(rmBundle)
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
        knexConfigPath && hasSeeds && commands.push(dbSeed)
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
        knexConfigPath && hasSeeds && firstCommands.push(dbSeed)
        firstCommands.push(rmBundle)
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
        knexConfigPath && hasSeeds && commands.push(dbSeed)
        commands.push(rmLibAndBundle, clientBuild, babel)
        hasHeroku ? commands.push(herokuLocalProd) : commands.push(nodeLocalProd)
        mySpawn(sequence(commands))
      },
    ],
    ['build-prod', () => mySpawn(sequence([rmLibAndBundle, clientBuild, babel]))],
    ['lint', () => mySpawn(sequence([lint, typecheck]))],
    [
      'test',
      () => {
        const commands = []
        const testDbId = getDbTestProcessId()
        hasDocker && testDbId && commands.push(dockerDownTest(testDbId))
        hasDocker && commands.push(DOCKER_UP_TEST)
        knexConfigPath && commands.push(DOCKER_WAIT_PG_TEST, dbMigrTest)
        commands.push(rmBundle, clientBuild, testParallel, testSequencial)
        mySpawn(sequence(commands))
      },
    ],
    [
      'lint-test',
      () => {
        const commands = [lint, typecheck]
        const testDbId = getDbTestProcessId()
        hasDocker && testDbId && commands.push(dockerDownTest(testDbId))
        hasDocker && commands.push(DOCKER_UP_TEST)
        knexConfigPath && commands.push(DOCKER_WAIT_PG_TEST, dbMigrTest)
        commands.push(rmBundle, clientBuild, testParallel, testSequencial)
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
