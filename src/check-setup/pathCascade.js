// @flow

import hasFile from './hasFile'

const pathCascade = (...filenames: any[]) => {
  if (!filenames.length) {
    throw Error('pathCascade takes at least one argument')
  }
  const filenames_ = Array.isArray(filenames[0]) ? filenames[0] : filenames
  return filenames_.find(f => hasFile(f))
}

export default pathCascade
