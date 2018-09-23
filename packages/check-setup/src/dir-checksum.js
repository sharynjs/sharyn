// @flow

const pathModule = require('path')
const fs = require('fs')
// flow-disable-next-line
const klawSync = require('klaw-sync')
// flow-disable-next-line
const md5 = require('md5')

const dirChecksum = (dirPath: string) => {
  const basePath = pathModule.resolve(dirPath)
  const files = klawSync(dirPath, {
    nodir: true,
    filter: ({ path }) =>
      !RegExp(`^${basePath}/node_modules/`).test(path) &&
      !RegExp(`^${basePath}/dist/`).test(path) &&
      !RegExp(`^${basePath}/.git/`).test(path) &&
      !RegExp(`^${basePath}/coverage/`).test(path) &&
      !RegExp(`^${basePath}/lib/`).test(path) &&
      !RegExp(`^${basePath}/data/`).test(path),
  }).map(f => f.path)
  const md5s = files.map(f => fs.readFileSync(f))
  const concatenatedMd5s = md5s.join()
  const finalMd5 = md5(concatenatedMd5s)
  return finalMd5
}

export default dirChecksum
