const fs = require('fs')

const appRoot = process.cwd()

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
