// @flow

import appRoot from './appRoot'

// eslint-disable-next-line import/no-dynamic-require, flow-disable-next-line
const { dependencies, devDependencies } = require(`${appRoot}/package.json`)

const hasPackage = (name: string, isRequired?: boolean) => {
  if ((dependencies && dependencies[name]) || (devDependencies && devDependencies[name])) {
    return true
  }
  if (isRequired) {
    throw Error(`Package ${name} is required`)
  }
  return false
}

module.exports = hasPackage
