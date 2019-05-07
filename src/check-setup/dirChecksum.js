// @flow

const pathModule = require('path')
const fs = require('fs')
const klawSync = require('klaw-sync')
const md5 = require('md5')

const dirChecksum = (dirPath: string, extraPaths: string[] = []) => {
  let files = klawSync(pathModule.resolve(dirPath), { nodir: true }).map(f => f.path)
  const extraFiles = extraPaths.map(p => pathModule.resolve(p))
  files = files.concat(extraFiles)
  const md5s = files.map(f => fs.readFileSync(f))
  const concatenatedMd5s = md5s.join()
  const finalMd5 = md5(concatenatedMd5s)
  return finalMd5
}

export default dirChecksum
