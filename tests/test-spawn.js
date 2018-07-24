// @flow

/* eslint-disable no-console */

import { spawnSync } from 'child_process'

const testSpawn = (folder: string, cmd: string, returnOutput?: false) => {
  const fullCmd = `cd tests/${folder} && ${cmd}`
  const { status, stdout, stderr } = spawnSync(fullCmd, { shell: true })
  const output = stdout.toString()
  if (status === 0) {
    return returnOutput ? output : null
  }
  throw Error(stderr.toString())
}

export default testSpawn
