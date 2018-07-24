// @flow

/* eslint-disable no-console */

import { spawnSync } from 'child_process'
import { path as appRoot } from 'app-root-path'

const testSpawn = (folder: string, cmd: string, returnOutput?: false) => {
  spawnSync('yarn', {
    cwd: `${appRoot}/tests/${folder}`,
    shell: true,
  })
  const { status, stdout, stderr } = spawnSync(cmd, {
    cwd: `${appRoot}/tests/${folder}`,
    shell: true,
  })
  const out = stdout.toString()
  const err = stderr.toString()
  if (status === 0) {
    return returnOutput ? out : null
  }
  throw Error(`STDOUT:\n${out}\n\nSTDERR:\n${err}`)
}

export default testSpawn
