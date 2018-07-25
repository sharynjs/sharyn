// @flow

// flow-disable-next-line
import { WDS_PORT as ENV_WDS_PORT, IS_PROD_ENV } from '@sharyn/env'

const DEFAULT_WDS_PORT = 8022

export const WDS_PORT = IS_PROD_ENV ? null : ENV_WDS_PORT ?? DEFAULT_WDS_PORT
export const WDS_PATH = WDS_PORT ? `http://localhost:${WDS_PORT}` : ''
