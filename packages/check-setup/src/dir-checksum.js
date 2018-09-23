// @flow

const fs = require('fs')
// flow-disable-next-line
const klawSync = require('klaw-sync')
// flow-disable-next-line
const md5 = require('md5')

const dirChecksum = (dirPath: string) => {
  const files = klawSync(dirPath, {
    nodir: true,
    filter: ({ path }) => !RegExp('node_modules').test(path) && !RegExp('.git').test(path),
  }).map(f => f.path)
  const md5s = files.map(f => fs.readFileSync(f))
  const concatenatedMd5s = md5s.join()
  const finalMd5 = md5(concatenatedMd5s)
  return finalMd5
}

export default dirChecksum
