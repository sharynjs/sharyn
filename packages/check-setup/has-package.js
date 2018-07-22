const appRoot = process.cwd()

// eslint-disable-next-line import/no-dynamic-require
const { dependencies, devDependencies } = require(`${appRoot}/package.json`)

const hasPackage = (name, isRequired) => {
  if ((dependencies && dependencies[name]) || (devDependencies && devDependencies[name])) {
    return true
  }
  if (isRequired) {
    throw Error(`Package ${name} is required`)
  }
  return false
}

module.exports = hasPackage
