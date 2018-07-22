// @flow

import fs from 'fs'

const hasFile = (filePath: string, isRequired?: boolean) => {
  if (fs.existsSync(`${process.cwd()}/${filePath}`)) {
    return true
  }
  if (isRequired) {
    throw Error(`File ${filePath} is required`)
  }
  return false
}

export default hasFile
