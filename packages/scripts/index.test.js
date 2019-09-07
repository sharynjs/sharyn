const { spawnSync } = require('child_process')
const asyncSpawn = require('child-process-promise').spawn

const { runSync, runAsync, series, parallel, scripts } = require('.')

jest.mock('child_process')
jest.mock('child-process-promise')

const realConsoleLog = console.log

const defaultSpawnOptions = { shell: true, stdio: 'inherit' }

beforeEach(() => {
  console.log = jest.fn()
  spawnSync.mockClear()
  asyncSpawn.mockClear()
})

afterEach(() => {
  console.log = realConsoleLog
})

test('runSync', () => {
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {})

  spawnSync.mockReturnValue({ status: 0 })

  expect(() => runSync('abc', { cmd: 'x' })).toThrow(
    'runSync cannot take both a command string argument and a command or cmd property in the options argument'
  )
  expect(() => runSync('abc', { command: 'x' })).toThrow(
    'runSync cannot take both a command string argument and a command or cmd property in the options argument'
  )

  expect(() => runSync({ cmd: 'x', command: 'y' })).toThrow(
    'You cannot pass both a cmd and a command option to runSync'
  )

  expect(() => runSync({})).toThrow(
    'You must pass a cmd or command property to the options of runSync'
  )

  runSync('silent-command', { silent: true })
  expect(console.log).not.toHaveBeenCalled()
  expect(spawnSync).toHaveBeenLastCalledWith('silent-command', defaultSpawnOptions)

  runSync('printing-command')
  expect(console.log).toHaveBeenCalledWith('\x1b[35mRunning\x1b[0m: printing-command')

  runSync('string-param')
  expect(spawnSync).toHaveBeenLastCalledWith('string-param', defaultSpawnOptions)

  runSync({ command: 'command-property' })
  expect(spawnSync).toHaveBeenLastCalledWith('command-property', defaultSpawnOptions)

  runSync({ cmd: 'cmd-property' })
  expect(spawnSync).toHaveBeenLastCalledWith('cmd-property', defaultSpawnOptions)

  runSync('extraEnv', { extraEnv: { a: 1 } })
  expect(spawnSync).toHaveBeenLastCalledWith('extraEnv', {
    ...defaultSpawnOptions,
    env: { ...process.env, a: 1 },
  })

  runSync('env', { env: { a: 1 } })
  expect(spawnSync).toHaveBeenLastCalledWith('env', {
    ...defaultSpawnOptions,
    env: { a: 1 },
  })

  runSync('env-and-extraEnv', { env: { a: 1 }, extraEnv: { b: 2 } })
  expect(spawnSync).toHaveBeenLastCalledWith('env-and-extraEnv', {
    ...defaultSpawnOptions,
    env: { a: 1, b: 2 },
  })

  expect(mockExit).not.toHaveBeenCalled()

  spawnSync.mockReturnValue({ status: 123 })
  runSync('failing-command')
  expect(mockExit).toHaveBeenCalledWith(1)
})

test('runAsync', () => {
  console.log = jest.fn()
  spawnSync.mockReturnValue({ status: 0 })

  expect(() => runAsync('abc', { cmd: 'x' })).toThrow(
    'runAsync cannot take both a command string argument and a command or cmd property in the options argument'
  )
  expect(() => runAsync('abc', { command: 'x' })).toThrow(
    'runAsync cannot take both a command string argument and a command or cmd property in the options argument'
  )

  expect(() => runAsync({ cmd: 'x', command: 'y' })).toThrow(
    'You cannot pass both a cmd and a command option to runAsync'
  )

  expect(() => runAsync({})).toThrow(
    'You must pass a cmd or command property to the options of runAsync'
  )

  runAsync('silent-command', { silent: true })
  expect(console.log).not.toHaveBeenCalled()
  expect(asyncSpawn).toHaveBeenLastCalledWith('silent-command', defaultSpawnOptions)

  runAsync('printing-command')
  expect(console.log).toHaveBeenCalledWith('\x1b[35mRunning\x1b[0m: printing-command')

  runAsync('string-param')
  expect(asyncSpawn).toHaveBeenLastCalledWith('string-param', defaultSpawnOptions)

  runAsync({ command: 'command-property' })
  expect(asyncSpawn).toHaveBeenLastCalledWith('command-property', defaultSpawnOptions)

  runAsync({ cmd: 'cmd-property' })
  expect(asyncSpawn).toHaveBeenLastCalledWith('cmd-property', defaultSpawnOptions)

  runAsync('extraEnv', { extraEnv: { a: 1 } })
  expect(asyncSpawn).toHaveBeenLastCalledWith('extraEnv', {
    ...defaultSpawnOptions,
    env: { ...process.env, a: 1 },
  })

  runAsync('env', { env: { a: 1 } })
  expect(asyncSpawn).toHaveBeenLastCalledWith('env', {
    ...defaultSpawnOptions,
    env: { a: 1 },
  })

  runAsync('env-and-extraEnv', { env: { a: 1 }, extraEnv: { b: 2 } })
  expect(asyncSpawn).toHaveBeenLastCalledWith('env-and-extraEnv', {
    ...defaultSpawnOptions,
    env: { a: 1, b: 2 },
  })
})

test('series', () => {
  series('a', 'b', 'c')
  expect(spawnSync.mock.calls).toEqual([
    ['a', defaultSpawnOptions],
    ['b', defaultSpawnOptions],
    ['c', defaultSpawnOptions],
  ])

  spawnSync.mockClear()

  series(['a', 'b', 'c'])
  expect(spawnSync.mock.calls).toEqual([
    ['a', defaultSpawnOptions],
    ['b', defaultSpawnOptions],
    ['c', defaultSpawnOptions],
  ])

  spawnSync.mockClear()

  series([['a'], 'b', [['c']]], 'd')
  expect(spawnSync.mock.calls).toEqual([
    ['a', defaultSpawnOptions],
    ['b', defaultSpawnOptions],
    ['c', defaultSpawnOptions],
    ['d', defaultSpawnOptions],
  ])

  spawnSync.mockClear()

  series('a', { cmd: 'b' }, { command: 'c' })
  expect(spawnSync.mock.calls).toEqual([
    ['a', defaultSpawnOptions],
    ['b', defaultSpawnOptions],
    ['c', defaultSpawnOptions],
  ])

  spawnSync.mockClear()

  series([{ command: 'a' }, { cmd: 'b' }, 'c'])
  expect(spawnSync.mock.calls).toEqual([
    ['a', defaultSpawnOptions],
    ['b', defaultSpawnOptions],
    ['c', defaultSpawnOptions],
  ])
})

test('parallel', async () => {
  expect(await parallel('a', 'b', 'c')).toEqual([undefined, undefined, undefined])
  expect(asyncSpawn).toHaveBeenCalledWith('a', defaultSpawnOptions)
  expect(asyncSpawn).toHaveBeenCalledWith('b', defaultSpawnOptions)
  expect(asyncSpawn).toHaveBeenCalledWith('c', defaultSpawnOptions)

  asyncSpawn.mockClear()

  await parallel('x', { cmd: 'y' }, { command: 'z' })
  expect(asyncSpawn).toHaveBeenCalledWith('x', defaultSpawnOptions)
  expect(asyncSpawn).toHaveBeenCalledWith('y', defaultSpawnOptions)
  expect(asyncSpawn).toHaveBeenCalledWith('z', defaultSpawnOptions)
})

test('scripts', () => {
  process.argv = [null, null, 'foo']
  expect(() => scripts({ bar: () => {} })).toThrow('"foo" does not exist in scripts()')
  process.argv = [null, null, 'bar']
  expect(() => scripts({ bar: () => {} })).not.toThrow()
})
