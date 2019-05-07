#! /usr/bin/env node

// @flow

import { execSync, spawn, spawnSync } from 'child_process'
import { EOL } from 'os'

import colors from 'colors/safe'

import swit from '../util/swit'

import { hasFile } from '../check-setup'
import { HEROKU_DEPLOYMENT_SOUND, TESTING_SOUND } from '../env'

import { knexConfigPath } from './shared'

import {
  BUILD_STORYBOOK,
  DOCKER_UP,
  DOCKER_UP_TEST,
  DOCKER_WAIT_PG,
  DOCKER_WAIT_PG_TEST,
  GIT_ADD_STORYBOOK,
  HEROKU_PIPELINE_PROMOTE,
  PUSH_ORIGIN_MASTER,
  PUSH_HEROKU_STAGING_MASTER,
  SAY_DONE,
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
  startStorybook,
  stats,
} from './commands'

const hasDocker = hasFile('docker-compose.yml')
const hasHeroku = hasFile('Procfile')
const hasSeeds = hasFile('/src/_db/seeds')

const taskName = process.argv[2]
const useDocker =
  hasDocker && (process.argv.length > 2 ? !(process.argv[3] === '--no-docker') : true)

const getDbTestProcessId = containerName => {
  if (useDocker) {
    const result = execSync(`docker ps -q --filter="name=${containerName}"`).toString()
    const ids = result.split(EOL).filter(x => x)
    if (ids.length > 1) {
      throw Error(`Multiple running processes found for ${containerName}`)
    }
    return ids[0]
  }
  return null
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

const result = swit(
  taskName,
  [
    [
      'dev',
      () => {
        const firstCommands = []
        useDocker && firstCommands.push(DOCKER_UP)
        useDocker && knexConfigPath && firstCommands.push(DOCKER_WAIT_PG, dbMigr)
        useDocker && knexConfigPath && hasSeeds && firstCommands.push(dbSeed)
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
        useDocker && commands.push(DOCKER_UP)
        useDocker && knexConfigPath && commands.push(DOCKER_WAIT_PG, dbMigr)
        useDocker && knexConfigPath && hasSeeds && commands.push(dbSeed)
        commands.push(serverWatchSsrOnly)
        mySpawnSync(sequence(commands))
      },
    ],
    [
      'dev-no-ssr',
      () => {
        const firstCommands = []
        useDocker && firstCommands.push(DOCKER_UP)
        useDocker && knexConfigPath && firstCommands.push(DOCKER_WAIT_PG, dbMigr)
        useDocker && knexConfigPath && hasSeeds && firstCommands.push(dbSeed)
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
        useDocker && commands.push(DOCKER_UP)
        useDocker && knexConfigPath && commands.push(DOCKER_WAIT_PG, dbMigr)
        useDocker && knexConfigPath && hasSeeds && commands.push(dbSeed)
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
        useDocker && testDbIdInitial && commands.push(dockerDownTest(testDbIdInitial))
        useDocker && testRedisIdInitial && commands.push(dockerDownTest(testRedisIdInitial))
        useDocker && commands.push(DOCKER_UP_TEST)
        useDocker && knexConfigPath && commands.push(DOCKER_WAIT_PG_TEST, dbMigrTest)
        commands.push(testE2E)
        const cmdResult = mySpawnSync(sequence(commands))
        const testDbIdFinal = getDbTestProcessId('db-test')
        const testRedisIdFinal = getDbTestProcessId('redis-test')
        const cleanupCommands = []
        useDocker && testDbIdFinal && cleanupCommands.push(dockerDownTest(testDbIdFinal))
        useDocker && testRedisIdFinal && cleanupCommands.push(dockerDownTest(testRedisIdFinal))
        cleanupCommands.length > 0 && mySpawnSync(sequence(cleanupCommands))
        TESTING_SOUND && mySpawnSync(SAY_DONE)
        return cmdResult
      },
    ],
    [
      'lint-test',
      () => {
        const commands = [lint, typecheck, rmBundle, testUnit, clientBuild]
        const testDbIdInitial = getDbTestProcessId('db-test')
        const testRedisIdInitial = getDbTestProcessId('redis-test')
        useDocker && testDbIdInitial && commands.push(dockerDownTest(testDbIdInitial))
        useDocker && testRedisIdInitial && commands.push(dockerDownTest(testRedisIdInitial))
        useDocker && commands.push(DOCKER_UP_TEST)
        useDocker && knexConfigPath && commands.push(DOCKER_WAIT_PG_TEST, dbMigrTest)
        commands.push(testE2E)
        const cmdResult = mySpawnSync(sequence(commands))
        const testDbIdFinal = getDbTestProcessId('db-test')
        const testRedisIdFinal = getDbTestProcessId('redis-test')
        const cleanupCommands = []
        useDocker && testDbIdFinal && cleanupCommands.push(dockerDownTest(testDbIdFinal))
        useDocker && testRedisIdFinal && cleanupCommands.push(dockerDownTest(testRedisIdFinal))
        cleanupCommands.length > 0 && mySpawnSync(sequence(cleanupCommands))
        TESTING_SOUND && mySpawnSync(SAY_DONE)
        return cmdResult
      },
    ],
    [
      'lint-test-storybook',
      () => {
        const commands = [lint, typecheck, rmBundle, testUnit, clientBuild]
        const testDbIdInitial = getDbTestProcessId('db-test')
        const testRedisIdInitial = getDbTestProcessId('redis-test')
        useDocker && testDbIdInitial && commands.push(dockerDownTest(testDbIdInitial))
        useDocker && testRedisIdInitial && commands.push(dockerDownTest(testRedisIdInitial))
        useDocker && commands.push(DOCKER_UP_TEST)
        useDocker && knexConfigPath && commands.push(DOCKER_WAIT_PG_TEST, dbMigrTest)
        commands.push(testE2E)
        const cmdResult = mySpawnSync(sequence(commands))
        const testDbIdFinal = getDbTestProcessId('db-test')
        const testRedisIdFinal = getDbTestProcessId('redis-test')
        const postTestsCommands = []
        useDocker && testDbIdFinal && postTestsCommands.push(dockerDownTest(testDbIdFinal))
        useDocker && testRedisIdFinal && postTestsCommands.push(dockerDownTest(testRedisIdFinal))
        if (cmdResult?.status === 0) {
          postTestsCommands.push(BUILD_STORYBOOK)
          postTestsCommands.push(GIT_ADD_STORYBOOK)
        }
        postTestsCommands.length > 0 && mySpawnSync(sequence(postTestsCommands))
        TESTING_SOUND && mySpawnSync(SAY_DONE)
        return cmdResult
      },
    ],
    [
      'deploy-staging',
      () => {
        const commands = [PUSH_ORIGIN_MASTER, PUSH_HEROKU_STAGING_MASTER]
        HEROKU_DEPLOYMENT_SOUND && commands.push(SAY_DONE)
        mySpawnSync(sequence(commands))
      },
    ],
    [
      'promote',
      () => {
        const commands = [HEROKU_PIPELINE_PROMOTE]
        HEROKU_DEPLOYMENT_SOUND && commands.push(SAY_DONE)
        mySpawnSync(sequence(commands))
      },
    ],
    [
      'deploy-prod',
      () => {
        const commands = [PUSH_ORIGIN_MASTER, PUSH_HEROKU_STAGING_MASTER, HEROKU_PIPELINE_PROMOTE]
        HEROKU_DEPLOYMENT_SOUND && commands.push(SAY_DONE)
        mySpawnSync(sequence(commands))
      },
    ],
    ['migrate-db', () => mySpawnSync(dbMigr)],
    ['stats', () => mySpawnSync(stats)],
    ['sound', () => mySpawnSync(SAY_DONE)],
    ['storybook', () => mySpawnSync(startStorybook)],
    ['build-storybook', () => mySpawnSync(BUILD_STORYBOOK)],
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
