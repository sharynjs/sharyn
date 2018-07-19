const fs = require('fs')
const path = require('path')

const appRoot = path.resolve(__dirname, '../../../')

const hasFile = (filePath, isRequired) => {
  if (fs.existsSync(`${appRoot}/${filePath}`)) {
    return true
  }
  if (isRequired) {
    throw Error(`File ${filePath} is required`)
  }
  return false
}

module.exports = hasFile
