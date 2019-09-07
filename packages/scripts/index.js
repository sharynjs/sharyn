const { spawnSync } = require('child_process')

const flattenDeep = require('lodash.flattendeep')
const isPlainObject = require('lodash.isplainobject')
const asyncSpawn = require('child-process-promise').spawn

const defaultSpawnOptions = { shell: true, stdio: 'inherit' }

const print = command => console.log(`\x1b[35mRunning\x1b[0m: ${command}`)

const getParams = (args, fnName) => {
  let cmdToUse
  let options = {}

  if (typeof args[0] === 'string') {
    cmdToUse = args[0]
    if (args.length > 0 && isPlainObject(args[1])) {
      options = args[1]
    }
    if (options.cmd || options.command) {
      throw Error(
        `${fnName} cannot take both a command string argument and a command or cmd property in the options argument`
      )
    }
  }

  if (isPlainObject(args[0])) {
    options = args[0]
    if (args[0].cmd && args[0].command) {
      throw Error(`You cannot pass both a cmd and a command option to ${fnName}`)
    }
    cmdToUse = args[0].cmd || args[0].command
    if (!cmdToUse) {
      throw Error(`You must pass a cmd or command property to the options of ${fnName}`)
    }
  }

  const { silent, cmd, command, extraEnv, env, ...spawnOptions } = options

  return { cmdToUse, silent, cmd, command, extraEnv, env, spawnOptions }
}

const runSync = (...args) => {
  const { cmdToUse, silent, cmd, command, extraEnv, env, spawnOptions } = getParams(args, 'runSync')

  silent || print(cmdToUse)

  const result = spawnSync(cmdToUse, {
    ...defaultSpawnOptions,
    ...(env || extraEnv ? { env: { ...(env || process.env), ...extraEnv } } : {}),
    ...spawnOptions,
  })

  if (result.status !== 0) {
    process.exit(1)
  }
}

const runAsync = (...args) => {
  const { cmdToUse, silent, cmd, command, extraEnv, env, spawnOptions } = getParams(
    args,
    'runAsync'
  )

  silent || print(cmdToUse)

  return asyncSpawn(cmdToUse, {
    ...defaultSpawnOptions,
    ...(env || extraEnv ? { env: { ...(env || process.env), ...extraEnv } } : {}),
    ...spawnOptions,
  })
}

const series = (...args) => flattenDeep(args).forEach(command => runSync(command))

const parallel = (...args) => Promise.all(flattenDeep(args).map(command => runAsync(command)))

const scripts = (scriptsObj = {}) => {
  const scriptCalledName = process.argv[2]
  if (scriptsObj[scriptCalledName]) {
    scriptsObj[scriptCalledName]()
  } else {
    throw Error(`"${scriptCalledName}" does not exist in scripts()`)
  }
}

module.exports = {
  runSync,
  runAsync,
  scripts,
  series,
  parallel,
}
