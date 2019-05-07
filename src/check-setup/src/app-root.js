// @flow

import { path } from 'app-root-path'

module.exports = process.env.USE_PROCESS_CWD_FOR_APP_ROOT ? process.cwd() : path
