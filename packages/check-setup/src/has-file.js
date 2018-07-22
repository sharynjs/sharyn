// @flow

import fs from 'fs'

const hasFile = (path: string, isRequired?: boolean) => {
  if (fs.existsSync(`${process.cwd()}/${path}`)) {
    return true
  }
  if (isRequired) {
    throw Error(`File ${path} is required`)
  }
  return false
}

export default hasFile
