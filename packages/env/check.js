require('dotenv/config')

const check = (envVarName, predicate, errorMessageFn) => {
  if (envVarName === undefined || predicate === undefined) {
    throw Error('check takes at least 2 arguments')
  }
  if (!predicate(process.env[envVarName])) {
    throw Error(
      errorMessageFn ? errorMessageFn(envVarName) : `Environment variable ${envVarName} is invalid.`
    )
  }
  return true
}
const checkPresent = (...args) => {
  if (args.length === 0) {
    throw Error('checkPresent takes at least 1 argument')
  }
  args.forEach(arg => {
    if (process.env[arg] === undefined) {
      throw Error(`${arg} is missing in process.env`)
    }
  })

  return true
}

const checkAbsent = (...args) => {
  if (args.length === 0) {
    throw Error('checkAbsent takes 1 argument')
  }
  args.forEach(arg => {
    if (process.env[arg] !== undefined) {
      throw Error(`${arg} is not allowed in process.env`)
    }
  })
  return true
}

module.exports = { check, checkPresent, checkAbsent }
