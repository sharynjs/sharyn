#! /usr/bin/env node

// @flow

import { EOL } from 'os'
import { execSync, spawn, spawnSync } from 'child_process'
// flow-disable-next-line
import swit from '@sharyn/util/swit'

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
  testUnit,
  testE2E,
  lint,
  typecheck,
  stats,
} from './commands'

const hasDocker = hasFile('docker-compose.yml')
const hasHeroku = hasFile('Procfile')
const hasSeeds = hasFile('/src/_db/seeds')

const getDbTestProcessId = containerName => {
  const result = execSync(`docker ps -q --filter="name=${containerName}"`).toString()
  const ids = result.split(EOL).filter(x => x)
  if (ids.length > 1) {
    throw Error(`Multiple running processes found for ${containerName}`)
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

const mySpawnSync = cmd => {
  // eslint-disable-next-line no-console
  console.log(
    `${colors.magenta(`[sharyn/cli]`)} ${colors.gray(cmd)}`.replace(
      /\.\/node_modules\/\.bin\//g,
      '',
    ),
  )
  return spawnSync(cmd, { shell: true, stdio: 'inherit' })
}

const sequence = arr => arr.join(' && ')

const taskName = process.argv[2]

const result = swit(
  taskName,
  [
    [
      'dev',
      () => {
        const firstCommands = []
        hasDocker && firstCommands.push(DOCKER_UP)
        hasDocker && knexConfigPath && firstCommands.push(DOCKER_WAIT_PG, dbMigr)
        hasDocker && knexConfigPath && hasSeeds && firstCommands.push(dbSeed)
        firstCommands.push(rmBundle)
        mySpawnSync(sequence(firstCommands))
        mySpawn(serverWatch)
        mySpawn(clientWatch)
      },
    ],
    [
      'dev-ssr-only',
      () => {
        const commands = []
        hasDocker && commands.push(DOCKER_UP)
        hasDocker && knexConfigPath && commands.push(DOCKER_WAIT_PG, dbMigr)
        hasDocker && knexConfigPath && hasSeeds && commands.push(dbSeed)
        commands.push(serverWatchSsrOnly)
        mySpawnSync(sequence(commands))
      },
    ],
    [
      'dev-no-ssr',
      () => {
        const firstCommands = []
        hasDocker && firstCommands.push(DOCKER_UP)
        hasDocker && knexConfigPath && firstCommands.push(DOCKER_WAIT_PG, dbMigr)
        hasDocker && knexConfigPath && hasSeeds && firstCommands.push(dbSeed)
        firstCommands.push(rmBundle)
        mySpawnSync(sequence(firstCommands))
        mySpawn(serverWatchNoSsr)
        mySpawn(clientWatch)
      },
    ],
    [
      'local-prod',
      () => {
        const commands = []
        hasDocker && commands.push(DOCKER_UP)
        hasDocker && knexConfigPath && commands.push(DOCKER_WAIT_PG, dbMigr)
        hasDocker && knexConfigPath && hasSeeds && commands.push(dbSeed)
        commands.push(rmLibAndBundle, clientBuild, babel)
        hasHeroku ? commands.push(herokuLocalProd) : commands.push(nodeLocalProd)
        mySpawnSync(sequence(commands))
      },
    ],
    ['build-prod', () => mySpawnSync(sequence([rmLibAndBundle, clientBuild, babel]))],
    ['lint', () => mySpawnSync(sequence([lint, typecheck]))],
    [
      'test',
      () => {
        const commands = [rmBundle, testUnit, clientBuild]
        const testDbIdInitial = getDbTestProcessId('db-test')
        const testRedisIdInitial = getDbTestProcessId('redis-test')
        hasDocker && testDbIdInitial && commands.push(dockerDownTest(testDbIdInitial))
        hasDocker && testRedisIdInitial && commands.push(dockerDownTest(testRedisIdInitial))
        hasDocker && commands.push(DOCKER_UP_TEST)
        hasDocker && knexConfigPath && commands.push(DOCKER_WAIT_PG_TEST, dbMigrTest)
        commands.push(testE2E)
        const cmdResult = mySpawnSync(sequence(commands))
        const testDbIdFinal = getDbTestProcessId('db-test')
        const testRedisIdFinal = getDbTestProcessId('redis-test')
        const cleanupCommands = []
        hasDocker && testDbIdFinal && cleanupCommands.push(dockerDownTest(testDbIdFinal))
        hasDocker && testRedisIdFinal && cleanupCommands.push(dockerDownTest(testRedisIdFinal))
        cleanupCommands.length > 0 && mySpawnSync(sequence(cleanupCommands))
        return cmdResult
      },
    ],
    [
      'lint-test',
      () => {
        const commands = [lint, typecheck, rmBundle, testUnit, clientBuild]
        const testDbIdInitial = getDbTestProcessId('db-test')
        const testRedisIdInitial = getDbTestProcessId('redis-test')
        hasDocker && testDbIdInitial && commands.push(dockerDownTest(testDbIdInitial))
        hasDocker && testRedisIdInitial && commands.push(dockerDownTest(testRedisIdInitial))
        hasDocker && commands.push(DOCKER_UP_TEST)
        hasDocker && knexConfigPath && commands.push(DOCKER_WAIT_PG_TEST, dbMigrTest)
        commands.push(testE2E)
        const cmdResult = mySpawnSync(sequence(commands))
        const testDbIdFinal = getDbTestProcessId('db-test')
        const testRedisIdFinal = getDbTestProcessId('redis-test')
        const cleanupCommands = []
        hasDocker && testDbIdFinal && cleanupCommands.push(dockerDownTest(testDbIdFinal))
        hasDocker && testRedisIdFinal && cleanupCommands.push(dockerDownTest(testRedisIdFinal))
        cleanupCommands.length > 0 && mySpawnSync(sequence(cleanupCommands))
        return cmdResult
      },
    ],
    ['migrate-db', () => mySpawnSync(dbMigr)],
    ['stats', () => mySpawnSync(stats)],
  ],
  () => {
    // eslint-disable-next-line no-console
    console.error(`${taskName} is not a valid @sharyn/cli command.`)
    process.exit(1)
  },
)

if (result) {
  process.exit(result.status)
}
