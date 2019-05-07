// @flow

import { WDS_PORT as ENV_WDS_PORT, IS_DEV_ENV } from '../env'

const DEFAULT_WDS_PORT = 8022

export const WDS_PORT = IS_DEV_ENV ? ENV_WDS_PORT ?? DEFAULT_WDS_PORT : null
export const WDS_PATH = WDS_PORT ? `http://localhost:${WDS_PORT}` : ''
