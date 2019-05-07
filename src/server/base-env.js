// @flow

// flow-disable-next-line
import { dirChecksum } from '@sharyn/check-setup'
// flow-disable-next-line
import { IS_DEV_ENV, NO_SSR, NO_VERSION_VALIDATION, SENTRY_DSN_PUBLIC } from '@sharyn/env'

const baseEnv = {
  IS_DEV_ENV,
  NO_SSR,
  SENTRY_DSN_PUBLIC,
  isServerRender: !NO_SSR,
  isOnline: true,
  SERVER_VERSION: NO_VERSION_VALIDATION ? null : dirChecksum('src', ['package.json', 'yarn.lock']),
}

export default baseEnv
