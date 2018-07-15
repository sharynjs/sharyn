// @flow

import 'dotenv/config'
import readEnv from 'read-env'

const env = readEnv({ transformKey: false })
env.IS_PROD = env.NODE_ENV === 'production'

export default env
