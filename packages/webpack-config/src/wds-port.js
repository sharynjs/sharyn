// @flow

// flow-disable-next-line
import { WDS_PORT } from '@sharyn/env'

const DEFAULT_WDS_PORT = 8022

export default WDS_PORT ?? DEFAULT_WDS_PORT
