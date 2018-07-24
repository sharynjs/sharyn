// @flow

/* eslint-disable global-require, import/no-dynamic-require */

import appRoot from './app-root'
import hasFile from './has-file'

const requireCascade = (...filenames: string[]) => {
  if (!filenames.length) {
    throw Error('requireCascade takes at least one argument')
  }
  let module
  const filesnames_ = Array.isArray(filenames[0]) ? filenames[0] : filenames

  filesnames_.some(f => {
    if (hasFile(f)) {
      // flow-disable-next-line
      const requiredModule = require(`${appRoot}/${f}`)
      module = requiredModule.default ?? requiredModule
      return true
    }
    return false
  })
  return module
}

module.exports = requireCascade
