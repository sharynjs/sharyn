// eslint-disable-next-line import/no-dynamic-require
const { dependencies, devDependencies } = require(`${process.cwd()}/package.json`)

const hasPackage = name => {
  if (dependencies && dependencies[name]) {
    return true
  }
  if (devDependencies && devDependencies[name]) {
    return true
  }
  return false
}

module.exports = hasPackage
