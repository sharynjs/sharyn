// @flow

// flow-disable-next-line
import { WDS_PORT, IS_PROD_ENV } from '@sharyn/env'

const DEFAULT_WDS_PORT = 8022

export default (IS_PROD_ENV ? null : WDS_PORT ?? DEFAULT_WDS_PORT)
