// @flow

// flow-disable-next-line
const klawSync = require('klaw-sync')
// flow-disable-next-line
const md5 = require('md5')

const dirChecksum = (dirPath: string) =>
  md5(
    klawSync(dirPath, {
      nodir: true,
      filter: ({ path }) => !RegExp('node_modules').test(path) && !RegExp('.git').test(path),
    })
      .map(f => md5(f.path))
      .join(),
  )

export default dirChecksum
