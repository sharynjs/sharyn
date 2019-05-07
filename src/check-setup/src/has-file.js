// @flow

import fs from 'fs'
import appRoot from './app-root'

const hasFile = (path: string, isRequired?: boolean) => {
  if (fs.existsSync(`${appRoot}/${path}`)) {
    return true
  }
  if (isRequired) {
    throw Error(`File ${path} is required`)
  }
  return false
}

module.exports = hasFile
