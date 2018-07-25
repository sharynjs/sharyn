// @flow

/* eslint-disable global-require, import/no-dynamic-require */

import appRoot from './app-root'
import hasFile from './has-file'

const NODE_ENV = process.env

const requireCascade_ = (...filenames: any[]) => {
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

const requireCascadeFromSource_ = (...filenames: string[]) =>
  requireCascade_(
    filenames.map(f => `${NODE_ENV === 'production' || NODE_ENV === 'test' ? 'lib/' : 'src/'}${f}`),
  )

export const requireCascade = requireCascade_
export const requireCascadeFromSource = requireCascadeFromSource_
